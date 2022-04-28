const Amount = require("./../../lib/models/amount");

describe("Pruebas unitarias para el modelo Amount", () => {
    test("Requerimiento 1: Poner datos vacios al modelo Amount", () => {
        const amount = new Amount();
        expect(amount.mission).toBeUndefined();
        expect(amount.quantity).toBeUndefined();
    });

    test("Requerimiento 2: Poner datos al modelo Amount con la mision node", () => {
        const amount = new Amount("node", 10);
        expect(amount.mission).toBe("node");
        expect(amount.quantity).toBe(10);
    });

    test("Requerimiento 3: Poner datos al modelo Amount con la mision java", () => {
        const amount = new Amount("java", 5);
        expect(amount.mission).toBe("java");
        expect(amount.quantity).toBe(5);
    });
});