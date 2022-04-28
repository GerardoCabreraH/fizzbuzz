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
});