import {gsap} from 'gsap'
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';

const TimelineSidebar = () => {
  // NOTE: 連続実行すると正しくアニメーションしなくなるので、ボタンを非活性にする処理が必要。
  const [disable, setDisable] = useState(false);

  // const [disable, setDisable] = React.useState(false);
  useEffect(() => {
    // NOTE:useEffectでgsap.fromを使うとアニメーションが止まる。。
    // onAnimation();
  },[]);

  const onAnimation = () => {
      setDisable(true);
      const timeline = gsap.timeline();
      timeline
      .from('.item1', {opacity: 0, x: -50, duration: 0.2})
      .from('.item2', {opacity: 0, x: -50, duration: 0.3})
      .from('.item3', {opacity: 0, x: -50, duration: 0.5})
      .from('.item4', {opacity: 0, x: -50, duration: 0.5})
      .from('.item5', {opacity: 0, x: -50, duration: 0.3, onComplete: () => { setDisable(false) }})

  }

  return (
    <div>
      <Button disabled={disable} variant="contained" onClick={onAnimation}>
        On Animation
        <PlayCircleFilledWhiteIcon style={{ color: "white", marginLeft: "10px" }} />
      </Button>
      <ul className='list'>
        <li className='item item1'>アイテム１</li>
        <li className='item item2'>アイテム２</li>
        <li className='item item3'>アイテム３</li>
        <li className='item item4'>アイテム４</li>
        <li className='item item5'>アイテム５</li>
      </ul>
    </div>
  );
}

export default TimelineSidebar;