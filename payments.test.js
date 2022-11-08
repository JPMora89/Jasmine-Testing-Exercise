describe('Payments test', function() {
    beforeEach(function() {
        billAmtInput.value = 200;
        tipAmtInput.value = 50;
    });
    it('should add a new payment using submitPaymentInfo', function() {
        submitPaymentInfo();
        
        expect(Object.keys(allPayments).length).toEqual(1);
    });
    it('should update payment table when using appendPaymentTable()', function() {
        let payment = createCurPayment();
        allPayments['payment1'] = payment;
        appendPaymentTable(payment); 
        let newTd = document.querySelectorAll('#paymentTable');
        
        expect(newTd.length).toEqual(1);
    });
    it('should not allow payment to be created when input is empty on createCurPayment()', function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        let payment = createCurPayment();

        expect(payment).toEqual(undefined);
    });
    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        allPayments = {};
        serverTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';

        

    })
});