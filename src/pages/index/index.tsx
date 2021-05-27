import { View, Button, Text } from "@tarojs/components";
import { useDispatch, useSelector } from "react-redux";
import { ADD, MINUS } from "../../constants/counter";
import { Store } from "../../reducers";
import List from "../../components/List/List";
import Hooks from "../../hooks/index";

import "./index.scss";

const { useList } = Hooks;

function Index() {
  const { num } = useSelector((store: Store) => store.counter);
  const [list, listActions] = useList<number>([0]);
  const dispatch = useDispatch();

  function addFn() {
    dispatch({ type: ADD });
    const preNum = list[list.length - 1] ?? -1;
    listActions.push(preNum + 1);
  }

  function decFn() {
    dispatch({ type: MINUS });
    if (list.length > 0) listActions.removeAt(list.length - 1);
  }

  return (
    <View className='index'>
      <Button className='add_btn' onClick={addFn}>
        +
      </Button>
      <Button className='dec_btn' onClick={decFn}>
        -
      </Button>
      <View>
        <Text>{num}</Text>
      </View>
      <View>
        <List
          dataSource={list}
          renderItem={item => <View>list: {item}</View>}
        ></List>
      </View>
    </View>
  );
}

export default Index;
