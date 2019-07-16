describe('data types', () => {
    describe('decalaring variables', () => {
        it('using let', () => {
            //let x: string | number;
            let x: any;

            x = 'Blue';
            x = 19;

            expect(x).toBe(19);

            let y = 34;

            expect(y).toBe(34);
        });

        it('using const', () => {
            const PI = 3.14;

            const favouritecolors = ['red', 'yellow', 'green'];

            //favouritecolors = [];

            favouritecolors[0] = 'purple';

            expect(favouritecolors[0]).toBe("purple");
        });

        it('has a var keyword but don\'t use it becase it is broken', () => {
            let age = 22;

            if (age > 21) {
                var message = "Old Enough"; // Do not do this. Ever. Don't use VAR
            }

            expect(message).toBe("Old Enough");
        });
    });
    describe('literals in typescript', () => {
        it('has numeric literals', () => {
            let x1 = 12;
            let x2 = 12.3;
            let x3 = 1_00_000; // you can put underscores in the thousands places for readability (TS only);
            let x4 = 0xff; // 0x means this is hexadecimal (base 16) number;
            let x5 = 0o22; //0o means it is base 9 (octal)
            let x6 = 0b1101; //0b means it is binary (base 2);
        });

        it('has sting literals', () => {
            let name = 'Sean';
            expect(name).toBe("Sean");

            //name = 'Flannery O\ 'Conner';
            name = "Flanner O' Conner";

            let quote = 'As Emerson said, "A follish consistency is the hobgoblin of small minds".';
            quote = "As Emerson said, \"A follish consistency is the hobgoblin of small minds\".";
        });

        it('has template string', () => {
            let story = `Chapter 1.

            it was dark and stormy night.

            The End`;

            console.log(story);

            let name = 'Bob', age = 50;

            let info = `The name is ${name} and the age is ${age}`;

            expect(info).toBe('The name is Bob and the age is 50');

            let message = `This is just a "string" by 'Jeff'`;
        });

        it('has the standard stuff', () => {
            let oldEnough = true;
            let tooYoung = false;

            expect("dog").toBeTruthy();
            expect("").toBeFalsy();
            expect(99).toBeTruthy();
            expect(0).toBeFalsy();
            expect(-1).toBeTruthy();
            expect(undefined).toBeFalsy();
            expect(null).toBeFalsy();
            expect(({})).toBeTruthy();
            expect([]).toBeTruthy();
        });

        it('josephs question', () => {
            const msg = "Hello";
            expect(msg).not.toBe("hello");

            const anything = [9, 20, 108];
            expect(anything).toEqual([9, 20, 108]);
        });

        it('has array literals', () => {
            let shoppinglist: (string | number)[] = [];

            shoppinglist[0] = 'Bread';
            shoppinglist[1] = 'Shampoo';
            shoppinglist[999] = 'Beer';

            let x = shoppinglist[0];

            expect(shoppinglist[999]).toBe('Beer');
            expect(shoppinglist[22]).toBeUndefined();
        });

        it('destructuring arrays', () => {
            const shoppinglist = ['Bread', 'Shampoo', 'Beer'];

            const [first, , third, fourth] = shoppinglist;

            expect(first).toBe('Bread');
            expect(third).toBe('Beer');
            expect(fourth).toBe(undefined);

            const [head, ...rest] = shoppinglist; //Jeff said this is the "rest" operator. Look it up.
            expect(head).toBe('Bread');
            expect(rest).toEqual(['Shampoo', 'Beer']);
        });

        it('also have a spread operator ', () => {
            let numbers = [1, 2, 3, 4, 5, 6];
            let numbers2 = [0, ...numbers, 7];
            expect(numbers2).toEqual([0, 1, 2, 3, 4, 5, 6, 7]);
            expect(numbers).toEqual([1, 2, 3, 4, 5, 6]);
        });

        it('has tuples.', () => {
            // let shoppingList: (string | number)[] = ['cat', 13, 'dog'];
            // let shoppingList: Array<string | number> = ['cat', 13, 'dog'];

            type Musician = [string, string, number, string];
            let warren: Musician = ['Warren', 'Ellis', 51, 'Musician'];

            const [, lastName, howOld] = warren;
            expect(lastName.toUpperCase()).toBe('ELLIS');
            expect(howOld).toBe(51);
        });
    });
});