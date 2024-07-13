import { Tabs } from "expo-router";

const TabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name={"completeQuran"} />
      <Tabs.Screen name={"surahs"} options={{ presentation: "modal" }} />
    </Tabs>
  );
};

export default TabLayout;
