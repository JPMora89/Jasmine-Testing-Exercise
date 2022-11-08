describe("sumPaymentTotal function tests", function () {

    beforeEach(function () {
      // initialization logic - setup allPayments object

      allPayments.payment1 = {
        billAmt: 100,
        tipAmt: 20,
     
      }
      allPayments.payment2 = {
        billAmt: 20,
        tipAmt: 3,
       
      }
      allPayments.payment3 = {
        billAmt: 200,
        tipAmt: 14,
        
      }
    });

    it('Checks to see if the billAmt is correct for all 3 payments combined', function () {
      expect(sumPaymentTotal('billAmt')).toEqual(320);
    });

    it('Checks to see if the tipAmt is correct for all 3 payments combined', function () {
      expect(sumPaymentTotal('tipAmt')).toEqual(37);
    });


    afterEach(function () {
      // teardown logic
      delete allPayments["payment1"];
      delete allPayments["payment2"];
      delete allPayments["payment3"];
    });

  });

  describe('Checking to see if CalculateTipPercentage function works', function() {
    it('Will pass when the correct tip percent is calculated from bill total and tip total', function() {
        expect(calculateTipPercent(200,50)).toEqual(25);
    })
  })

  describe('Checks to see if appendTd function works', function() {
  it('should check to see if a table-data is created in appendTD()', function() {
    let newTr = document.createElement('tr');
    appendTd(newTr, 'value');
    expect(newTr.children.length).toEqual(1);

  });

  })

  afterEach(function() {
    billAmtInput.value = '';
    tipAmtInput.value = '';
  })

  it('append delete button should be created', function() {
    let newTr = document.createElement('tr');
    appendDeleteButton(newTr);
    
    expect(newTr.children.length).toEqual(1);
  })