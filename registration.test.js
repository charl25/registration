describe("Registration Function", function(){
    it("should take  and display a plate number that starts with CA", function(){
        var regNums = RegNums()
        regNums.plateNumber("CA 52364")
        assert.equal("CA 52364", regNums.getPlates())
    })

    it("should not take a plate number not starting with CA,CJ or CY", function(){
        var regNums = RegNums()
        regNums.plateNumber("CJ 5632")
        regNums.plateNumber("CX 35612")
        assert.equal("CJ 5632", regNums.getPlates())
    })

    it("should not take a plate number shorter then 3 or longer then 6 digits", function(){
        var regNums = RegNums()
        regNums.plateNumber("CA 35")
        regNums.plateNumber("CA 2356123")
        assert.equal("", regNums.getPlates())
    })

    it("should return plates starting with CA only", function(){
        var regNums = RegNums()
        regNums.plateNumber("CJ 2153")
        regNums.plateNumber("CY 2153")
        regNums.plateNumber("CA 2153")
        regNums.plateNumber("CY 21523")
        regNums.plateNumber("CJ 21523")
        regNums.sort("CA")
        assert.equal("CA 2153", regNums.sorted())
    })
})