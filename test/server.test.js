const app = require("../lib/server");
const request = require("supertest");

describe("Probar rutas de la aplicacion", () => {
    test("Get '/v1/explorers/node", (done) => {
        request(app)
            .get("/v1/explorers/node")
            .expect(200)
            .expect((res) => {
                console.log(res.body);
                expect(res.body.id).toBe(1);
                expect(res.body.mission).toBe("node");
            })
            .end((err, res) => {
                if (err) return done(err);
                return done();
            });
    });
});
