const MissionCommander = require('./../app/missionCommander');

describe("Esto es una suite de pruebas", () => {
    test('Caso de prueba 1', () => {
        const result = 1 + 2
        expect(result).toBe(3);
    });
})

describe('Pruebas en clase MissionCommander', () => {
    test('1.- Crear un objeto de la clase', () => {
        const myMissionCommander = new MissionCommander('Woopa');
        expect(myMissionCommander.name).toBe('Woopa');
        expect(myMissionCommander).toEqual({name: 'Woopa'});
    });
})