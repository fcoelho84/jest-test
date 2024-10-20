import { getInitials } from "./names";

test("Um nome completo é fornecido e deve retornar as iniciais", () => {
    expect(getInitials('Fabiano Coelho')).toBe('FC');
})
// test("Um nome nulo é fornecido e deve retornar erro", () => {
//   expect(getInitials('')).toThrow('O nome não pode ser nulo');
// })
// https://jestjs.io/docs/expect#tothrowerror

test("Um nome nulo é fornecido e deve retornar erro", () => {
  expect(() => getInitials('')).toThrow('O nome não pode ser nulo');
})

test("Um nome inválido é fornecido e deve retornar erro", () => {
  try {
    expect(getInitials({} as any));
  } catch (e: any) {
      expect(e.message).toBe("Nome inválido");
  }
})

test("Um nome sem espaços é fornececido e deve retornar a inicial", () => {
  expect(getInitials("FabianoCoelho")).toBe('F');
})
