const app = require("./../lib/server");
const request = require("supertest");

describe("Probar rutas del servidor", () => { 
    test("Requerimiento 1: Probar ruta principal", (done) => {
        request(app)
            .get("/")
            .expect(200)
            .expect((res) => {
                console.log(res.body);
                expect((res.body).message).toBe("FizzBuzz Api welcome!");
            })
            .end((err) => {
                if (err) return done(err);
                return done();
            });
    });
    test("Requerimiento 2: Filtrar explorers por mision node", (done) => {
        request(app)
            .get("/v1/explorers/node")
            .expect(200)
            .expect((res) => {
                console.log(res.body);
                expect(res.body.length).toBe(10);
            })
            .end((err) => {
                if (err) return done(err);
                return done();
            });
    });
    test("Requerimiento 3: Filtrar explorers por mision java", (done) => {
        request(app)
            .get("/v1/explorers/java")
            .expect(200)
            .expect((res) => {
                console.log(res.body);
                expect(res.body.length).toBe(5);
            })
            .end((err) => {
                if (err) return done(err);
                return done();
            });
    });
    test("Requerimiento 4: Filtrar cantidad de explorers por mision node", (done) => {
        request(app)
            .get("/v1/explorers/amount/node")
            .expect(200)
            .expect((res) => {
                console.log(res.body);
                expect((res.body).mission).toBe("node");
                expect((res.body).quantity).toBe(10);
            })
            .end((err) => { 
                if (err) return done(err);
                return done();
            });
    });
    test("Requerimiento 5: Filtrar cantidad de explorers por mision java", (done) => {
        request(app)
            .get("/v1/explorers/amount/java")
            .expect(200)
            .expect((res) => {
                console.log(res.body);
                expect((res.body).mission).toBe("java");
                expect((res.body).quantity).toBe(5);
            })
            .end((err) => {
                if (err) return done(err);
                return done();
            });
    });
    test("Requerimiento 6: Filtrar usernames de los explorers por mision node", (done) => {
        request(app)
            .get("/v1/explorers/usernames/node")
            .expect(200)
            .expect((res) => {
                console.log(res.body);
                expect((res.body).mission).toBe("node");
                expect((res.body).explorers.length).toBe(10);
            })
            .end((err) => {
                if (err) return done(err);
                return done();
            });
    });
    test("Requerimiento 7: Filtrar usernames de los explorers por mision java", (done) => {
        request(app)
            .get("/v1/explorers/usernames/java")
            .expect(200)
            .expect((res) => {
                console.log(res.body);
                expect((res.body).mission).toBe("java");
                expect((res.body).explorers.length).toBe(5);
            })
            .end((err) => {
                if (err) return done(err);
                return done();
            });
    });
    test("Requerimiento 8: Obtener trick score", (done) => {
        request(app)
            .get("/v1/fizzbuzz/1")
            .expect(200)
            .expect((res) => {
                console.log(res.body);
                expect((res.body).trick).toBe(1);
                expect((res.body).score).toBe(1);
            })
            .end((err) => {
                if (err) return done(err);
                return done();
            });
    });
    test("Requerimiento 9: Obtener trick FIZZ", (done) => {
        request(app)
            .get("/v1/fizzbuzz/3")
            .expect(200)
            .expect((res) => {
                console.log(res.body);
                expect((res.body).trick).toBe("FIZZ");
                expect((res.body).score).toBe(3);
            })
            .end((err) => {
                if (err) return done(err);
                return done();
            });
    });
    test("Requerimiento 10: Obtener trick BUZZ", (done) => {
        request(app)
            .get("/v1/fizzbuzz/5")
            .expect(200)
            .expect((res) => {
                console.log(res.body);
                expect((res.body).trick).toBe("BUZZ");
                expect((res.body).score).toBe(1);
            })
            .end((err) => {
                if (err) return done(err);
                return done();
            });
    });
    test("Requerimiento 11: Obtener trick FIZZBUZZ", (done) => {
        request(app)
            .get("/v1/fizzbuzz/15")
            .expect(200)
            .expect((res) => {
                console.log(res.body);
                expect((res.body).trick).toBe("FIZZBUZZ");
                expect((res.body).score).toBe(15);
            })
            .end((err) => {
                if (err) return done(err);
                return done();
            });
    });
});