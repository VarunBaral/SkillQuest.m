import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./sales.module.css";
const Sales: NextPage = () => {
  const router = useRouter();

  const onFrameButtonClick = useCallback(() => {
    window.open(
      "https://youtube.com/playlist?list=PLdO5xp5occOw1XQC6Tv6mVQ8NuYyE3XMv"
    );
  }, []);

  const onFrameButton1Click = useCallback(() => {
    window.open(
      "https://youtube.com/playlist?list=PLEJiw0R_FiH5sEtlPim5-HrxtW89sEb8U"
    );
  }, []);

  const onFrameButton2Click = useCallback(() => {
    window.open(
      "https://youtube.com/playlist?list=PLJR61fXkAx12tx-Qz4pA-hbQWjDyvVNog"
    );
  }, []);

  const onFrameButton3Click = useCallback(() => {
    window.open(
      "https://youtube.com/playlist?list=PLoUVJsDQgZIIDinZ2l865qEhABzjBrndf"
    );
  }, []);

  const onFrameButton4Click = useCallback(() => {
    window.open(
      "https://youtube.com/playlist?list=PLCwOIOwZBb1gTXHXCnPTO2hPqljuROxgO"
    );
  }, []);

  const onRectangleButtonClick = useCallback(() => {
    router.push("/sales");
  }, [router]);

  const onRectangleButton1Click = useCallback(() => {
    router.push("/sending-cold-emails");
  }, [router]);

  const onRectangleButton2Click = useCallback(() => {
    router.push("/prompt-engineer");
  }, [router]);

  const onRectangleButton3Click = useCallback(() => {
    router.push("/build-your-own-brand");
  }, [router]);

  const onRectangleButton4Click = useCallback(() => {
    router.push("/public-speaking");
  }, [router]);

  const onPublicSpeakingClick = useCallback(() => {
    router.push("/public-speaking");
  }, [router]);

  const onSalesClick = useCallback(() => {
    router.push("/sales");
  }, [router]);

  const onPromptEngineeringClick = useCallback(() => {
    router.push("/prompt-engineer");
  }, [router]);

  const onSendingColdEmailsClick = useCallback(() => {
    router.push("/sending-cold-emails");
  }, [router]);

  const onBuildingYourOwnClick = useCallback(() => {
    router.push("/build-your-own-brand");
  }, [router]);

  const onFrameButton5Click = useCallback(() => {
    router.push("/excel");
  }, [router]);

  const onFrameButton6Click = useCallback(() => {
    router.push("/web-development");
  }, [router]);

  const onFrameButton7Click = useCallback(() => {
    router.push("/python");
  }, [router]);

  const onFrameButton8Click = useCallback(() => {
    router.push("/people-management");
  }, [router]);

  const onFrameButton9Click = useCallback(() => {
    router.push("/uiux");
  }, [router]);

  const onRectangleButton5Click = useCallback(() => {
    router.push("/second-page");
  }, [router]);

  const onAccessCoursesClick = useCallback(() => {
    router.push("/second-page");
  }, [router]);

  return (
    <div className={styles.sales}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
        <img
          className={styles.screenshot20230425At1047}
          alt=""
          src="/screenshot-20230425-at-1047-1@2x.png"
        />
        <b className={styles.about}>ABOUT</b>
      </div>
      <div className={styles.salesChild} />
      <div className={styles.salesItem} />
      <div className={styles.salesInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.salesChild1} />
      <button className={styles.rectangleGroup} onClick={onFrameButtonClick}>
        <div className={styles.frameInner} />
        <div className={styles.watch}>Watch</div>
      </button>
      <button
        className={styles.rectangleContainer}
        onClick={onFrameButton1Click}
      >
        <div className={styles.frameInner} />
        <div className={styles.watch}>Watch</div>
      </button>
      <button className={styles.frameButton} onClick={onFrameButton2Click}>
        <div className={styles.frameInner} />
        <div className={styles.watch}>Watch</div>
      </button>
      <button className={styles.rectangleParent1} onClick={onFrameButton3Click}>
        <div className={styles.frameInner} />
        <div className={styles.watch}>Watch</div>
      </button>
      <button className={styles.rectangleParent2} onClick={onFrameButton4Click}>
        <div className={styles.frameInner} />
        <div className={styles.watch}>Watch</div>
      </button>
      <div className={styles.byBuildAnd}>by Build and Balance</div>
      <img
        className={styles.screenshot20230429At1135}
        alt=""
        src="/screenshot-20230429-at-1135@2x.png"
      />
      <b className={styles.salesTrainingVideos}>
        Sales Training Videos For Beginners [Playlist]
      </b>
      <div className={styles.byJordanPlatten}>by Jordan Platten</div>
      <img
        className={styles.screenshot20230429At11351}
        alt=""
        src="/screenshot-20230429-at-11351@2x.png"
      />
      <b className={styles.salesCourseplaylist}>Sales Course[Playlist]</b>
      <div className={styles.byDavidChang}>by David Chang</div>
      <img
        className={styles.screenshot20230429At1134}
        alt=""
        src="/screenshot-20230429-at-1134@2x.png"
      />
      <b className={styles.beginnerSalesTraining}>
        Beginner Sales Training ecourse [ Playlist]
      </b>
      <img
        className={styles.screenshot20230429At11341}
        alt=""
        src="/screenshot-20230429-at-11341@2x.png"
      />
      <b className={styles.theSmartSales}>The SMART Sales System [Playlist]</b>
      <div className={styles.bySalesScripter}>by Sales Scripter</div>
      <img
        className={styles.screenshot20230429At11342}
        alt=""
        src="/screenshot-20230429-at-11342@2x.png"
      />
      <b
        className={styles.salesAdvice}
      >{`Sales Advice & Technique [Playlist]`}</b>
      <div className={styles.byNeilPatel}>by Neil Patel</div>
      <div className={styles.frameDiv}>
        <div className={styles.allCategoriesParent}>
          <div className={styles.allCategories}>
            <p className={styles.blankLine}>ALL CATEGORIES:</p>
            <p className={styles.blankLine}>&nbsp;</p>
          </div>
          <button
            className={styles.rectangleButton}
            onClick={onRectangleButtonClick}
          />
          <button
            className={styles.frameChild5}
            onClick={onRectangleButton1Click}
          />
          <button
            className={styles.frameChild6}
            onClick={onRectangleButton2Click}
          />
          <button
            className={styles.frameChild7}
            onClick={onRectangleButton3Click}
          />
          <button
            className={styles.frameChild8}
            onClick={onRectangleButton4Click}
          />
          <button
            className={styles.publicSpeaking}
            onClick={onPublicSpeakingClick}
          >
            <p className={styles.blankLine}>Public Speaking</p>
          </button>
          <button className={styles.sales1} onClick={onSalesClick}>
            <p className={styles.blankLine}>Sales</p>
          </button>
          <button
            className={styles.promptEngineering}
            onClick={onPromptEngineeringClick}
          >
            <p className={styles.blankLine}>Prompt Engineering</p>
          </button>
          <button
            className={styles.sendingColdEmailsContainer}
            onClick={onSendingColdEmailsClick}
          >
            <p className={styles.blankLine}>Sending Cold Emails</p>
          </button>
          <button
            className={styles.buildingYourOwnContainer}
            onClick={onBuildingYourOwnClick}
          >
            <p className={styles.blankLine}>Building your Own Personal Brand</p>
          </button>
          <button
            className={styles.rectangleParent3}
            onClick={onFrameButton5Click}
          >
            <div className={styles.frameChild9} />
            <div className={styles.excel}>
              <p className={styles.blankLine}>Excel</p>
            </div>
          </button>
          <button
            className={styles.rectangleParent4}
            onClick={onFrameButton6Click}
          >
            <div className={styles.frameChild10} />
            <div className={styles.webDevelopment}>
              <p className={styles.blankLine}>Web Development</p>
            </div>
          </button>
          <div className={styles.frameChild11} />
          <button
            className={styles.pythonWrapper}
            onClick={onFrameButton7Click}
          >
            <div className={styles.python}>Python</div>
          </button>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle-11.svg"
          />
          <button
            className={styles.peopleManagementWrapper}
            onClick={onFrameButton8Click}
          >
            <div className={styles.peopleManagement}>
              <p className={styles.blankLine}>People Management</p>
            </div>
          </button>
          <button className={styles.vectorParent} onClick={onFrameButton9Click}>
            <img
              className={styles.frameChild12}
              alt=""
              src="/rectangle-19.svg"
            />
            <div className={styles.uiux}>
              <p className={styles.blankLine}>UI/UX</p>
            </div>
          </button>
        </div>
      </div>
      <div className={styles.rectangleParent5}>
        <button
          className={styles.frameChild13}
          onClick={onRectangleButton5Click}
        />
        <button className={styles.accessCourses} onClick={onAccessCoursesClick}>
          Access Courses
        </button>
      </div>
    </div>
  );
};

export default Sales;
