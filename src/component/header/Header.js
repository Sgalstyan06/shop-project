import { Menu, Segment } from "semantic-ui-react";
function Header(){
    return(
        <>
         <Menu stackable>
          <Menu.Item name="home" active={true} />
          <Menu.Item name="messages" active={false} />
          <Menu.Item name="friends" active={false} />
          <Menu.Menu position="right">
            <Menu.Item name="logout" active={false} />
          </Menu.Menu>
        </Menu>
        </>
    )
}
export default Header;