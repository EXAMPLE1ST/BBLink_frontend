import React from 'react';
import CMButton from './components/CMButton';
import CMInput from './components/CMInput';


function WriteReview() {
 return (

<div>
<center>
    <h1>
        주문 내역
        </h1>
        
    <label>
        봉추찜닭 서울대입구역점</label>
        &nbsp; &nbsp; &nbsp;
        <CMButton text={'리뷰 쓰기'}/>
        <br/>

    <label>
        엽기떡볶이 동대문점</label>
        &nbsp; &nbsp; &nbsp;
        <CMButton text={'리뷰 쓰기'} />
        <br/>
        <br/>
        <br/>
        <label>
        별점
        <br/> </label>
        <CMInput hint="리뷰" /><CMButton text={'추가'} />
        <br/>
        <label>사진 넣을 자리!</label>
        <br/>
        <br/>

</center>
 </div>
 );
}
export default WriteReview;
