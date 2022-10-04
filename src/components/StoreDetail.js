import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Nav } from "react-bootstrap";
import styled from "styled-components";
import { useEffect, useState } from "react";

const StoreDetail = () => {
  const navigate = useNavigate();
  const handleCall = () => alert("매장 전화 연결");
  const handleHeart = () => alert("매장 찜 완료");
  return (
    <>
      <div
        style={{
          margin: 20,
          padding: 20,
        }}
      >
        <div className="StoreDetail">
          <header>
            <h3>
              끝내주는 마라탕<br></br>
            </h3>
          </header>

          <div className="StoreInfoImage" style={{ float: "left", margin: 10 }}>
            <img
              className="storeImg"
              src="img/storelogo.png"
              width="150"
              height="150"
              alt="끝내주는 마라탕의 로고"
              align-items="left"
            />
          </div>
          <div className="StoreInfoText" style={{ float: "left", margin: 10 }}>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            {"     "}4.9 (59)
            <br></br>
            최소 주문 금액 <b>12,000원</b>
            <br></br>
            배달 소요 시간 <b>52~62분</b>
            <div style={{ clear: "both" }}></div>
            <hr style={{ width: 500 }}></hr>
            <div>
              <Button
                variant="warning"
                onClick={handleCall}
                style={{ width: 100, fontSize: 30 }}
              >
                <b>전화</b>
              </Button>{" "}
              <Button
                variant="warning"
                onClick={handleHeart}
                style={{ width: 100, fontSize: 30 }}
              >
                <b>찜</b>
              </Button>{" "}
            </div>
          </div>
        </div>
        <div style={{ clear: "both" }}></div>
        <br></br>
        <Tabs
          defaultActiveKey="menu"
          id="fill-tab-example"
          className="mb-3"
          fill
        >
          <Tab
            eventKey="menu"
            title="메뉴"
            onClick={() => {
              navigate("/store");
            }}
          ></Tab>
          <Tab
            eventKey="info"
            title="정보"
            onClick={() => {
              navigate("/storeinfo");
            }}
          ></Tab>
          <Tab
            eventKey="review"
            title="리뷰"
            onClick={() => {
              navigate("/storereview");
            }}
          ></Tab>
        </Tabs>
      </div>
      {/* <div
        style={{
          margin: 20,
        }}
      >
        <br></br>
        <button
          onClick={() => {
            navigate("/store");
          }}
        >
          메뉴
        </button>
        <button
          onClick={() => {
            navigate("/storeinfo");
          }}
        >
          정보
        </button>
        <button
          onClick={() => {
            navigate("/storereview");
          }}
        >
          리뷰
        </button>
      </div> */}
    </>
  );
};

export default StoreDetail;
