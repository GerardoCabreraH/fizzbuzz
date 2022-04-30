const app = require("./../lib/server");
const request = require("supertest");

describe("Probar rutas del servidor", () => { 
    test("Requerimiento 1: Probar ruta principal", (done) => {
        request(app)
            .get("/")
            .expect(200)
            .expect((res) => {
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
                expect((res.body).trick).toBe("BUZZ");
                expect((res.body).score).toBe(5);
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
                expect((res.body).trick).toBe("FIZZBUZZ");
                expect((res.body).score).toBe(15);
            })
            .end((err) => {
                if (err) return done(err);
                return done();
            });
    });

    test("Requerimiento 12: Filtrar explorers por stack javascript", (done) => {
        request(app)
            .get("/v1/explorers/stack/javascript")
            .expect(200)
            .expect((res) => {
                expect(res.body.length).toBe(11);
            })
            .end((err) => {
                if (err) return done(err);
                return done();
            });
    });

    test("Requerimiento 13: Filtrar explorers por stack ReasonML", (done) => {
        request(app)
            .get("/v1/explorers/stack/reasonML")
            .expect(200)
            .expect((res) => {
                expect(res.body.length).toBe(9);
            })
            .end((err) => {
                if (err) return done(err);
                return done();
            });
    });

    test("Requerimiento 14: Filtrar explorers por stack Elm", (done) => {
        request(app)
            .get("/v1/explorers/stack/elm")
            .expect(200)
            .expect((res) => {
                expect(res.body.length).toBe(12);
            })
            .end((err) => {
                if (err) return done(err);
                return done();
            });
    });

    test("Requerimiento 15: Filtrar explorers por stack Groovy", (done) => {
        request(app)
            .get("/v1/explorers/stack/groovy")
            .expect(200)
            .expect((res) => {
                expect(res.body.length).toBe(9);
            })
            .end((err) => {
                if (err) return done(err);
                return done();
            });
    });

    test("Requerimiento 16: Filtrar explorers por stack Elixir", (done) => {
        request(app)
            .get("/v1/explorers/stack/elixir")
            .expect(200)
            .expect((res) => {
                expect(res.body.length).toBe(9);
            })
            .end((err) => {
                if (err) return done(err);
                return done();
            });
    });
});