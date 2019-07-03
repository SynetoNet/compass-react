import React    from "react"
import Icon     from "./Icon"
import renderer from "react-test-renderer"

test("renders default Icon", () => {
  const component = renderer.create(<Icon name="fas fa-user"/>)
  expect(component.toJSON()).toMatchSnapshot()
})
