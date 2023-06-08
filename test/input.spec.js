

describe('Input tesztelése', ()=> {
    it('szám', ()=> {
        let actual = checkInput(30);
        expect(actual).toBe(true);
    });

    it('nem szám', ()=> {
        let actual = checkInput('#');
        expect(actual).toBe(false);
    });

    it('0', ()=> {
        let actual = checkInput(0);
        expect(actual).toBe(false);
    });

    it('-1', ()=> {
        let actual = checkInput(-1);
        expect(actual).toBe(false);
    });
});