import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { Foo } from "./Foo";

describe("Foo component", () => {
  test("should have heading with Foo text", () => {
    render(<Foo />);

    const h1 = screen.getByRole("heading", { level: 1, name: "Foo" });
    expect(h1).toBeDefined();
  });
});
