// vitest.setup.ts
import "@testing-library/jest-dom/vitest";
import { beforeEach } from "vitest";

beforeEach(() => {
  // Clear session storage before each test
  sessionStorage.clear();
});
