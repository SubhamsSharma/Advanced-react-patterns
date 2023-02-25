import FlyoutProvider from "./Flyout";

export default function FlyoutMenu() {
  return (
    <FlyoutProvider>
      <FlyoutProvider.Toggle />
      <FlyoutProvider.List>
        <FlyoutProvider.Item>
          <h3>Men's</h3>
        </FlyoutProvider.Item>
        <FlyoutProvider.Item>
          <h3>Women's</h3>
        </FlyoutProvider.Item>
        <FlyoutProvider.Item>
          <h3>Kid's</h3>
        </FlyoutProvider.Item>
        <FlyoutProvider.Item>
          <h3>Beauty And Fragnance</h3>
        </FlyoutProvider.Item>
      </FlyoutProvider.List>
    </FlyoutProvider>
  );
}
