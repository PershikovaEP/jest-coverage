const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });

  it("when identical book titles should not be sorted", () => {
    expect(
      sorting.sortByName(["Гарри Поттер", "Гарри Поттер", "Гарри Поттер"])
    ).toEqual(["Гарри Поттер", "Гарри Поттер", "Гарри Поттер"]);
  });

  it("when there are no books there should be no sorting", () => {
    expect(sorting.sortByName([])).toEqual([]);
  });
});
