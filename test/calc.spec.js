

describe('Számítás tesztelése', ()=> {
    it('1.teszt, Magasság: 1, Szélesség: 2, Hossz: 3', ()=> {
        let actual = calcVolume(1, 2, 3);
        let expected= 5.4;
        expect(actual).toBeCloseTo(expected, 0.9);
    });
    it('2.teszt: Magasság: 10, Szélesség: 20, Hossz: 30', ()=> {
        let actual = calcVolume(10, 20, 30);
        let expected= 5940;
        expect(actual).toBeCloseTo(expected, 0.9);
 
    });

    });
