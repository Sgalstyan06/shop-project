import { Menu, Segment } from "semantic-ui-react";
function Header() {
  return (
    <>
      <Menu stackable>
        <Menu.Item name="home" active={true} />
        <Menu.Item name="products" active={false} />
        <Menu.Item name="review" active={false} />
        <Menu.Menu position="right">
          <Menu.Item name="log in" active={false} />
        </Menu.Menu>
      </Menu>
    </>
  );
}
export default Header;
