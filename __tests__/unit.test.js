// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from "../code-to-unit-test/unit-test-me";

// TODO - Part 2
test("isPhoneNumber", () => {
  expect(isPhoneNumber("858-123-4567")).toBe(true);
  expect(isPhoneNumber("(858) 123-4567")).toBe(true);
  expect(isPhoneNumber("8581234567")).toBe(false);
  expect(isPhoneNumber("85-12-567")).toBe(false);
});

test("isEmail", () => {
  expect(isEmail("valid@example.com")).toBe(true);
  expect(isEmail("jes063@ucsd.edu")).toBe(true);
  expect(isEmail("invalid")).toBe(false);
  expect(isEmail("another@invalid")).toBe(false);
});

test("isStrongPassword", () => {
  expect(isStrongPassword("Valid_123")).toBe(true);
  expect(isStrongPassword("cse110")).toBe(true);
  expect(isStrongPassword("cse110isainterestingclass")).toBe(false);
  expect(isStrongPassword("@invalid")).toBe(false);
});

test("isDate", () => {
  expect(isDate("12/31/2020")).toBe(true);
  expect(isDate("1/1/2020")).toBe(true);
  expect(isDate("2020/12/31")).toBe(false);
  expect(isDate("12-31-2020")).toBe(false);
});

test("isHexColor", () => {
  expect(isHexColor("#FFF")).toBe(true);
  expect(isHexColor("#123456")).toBe(true);
  expect(isHexColor("1234567")).toBe(false);
  expect(isHexColor("G12")).toBe(false);
});
