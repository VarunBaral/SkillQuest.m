import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./prompt-engineer.module.css";
const PromptEngineer: NextPage = () => {
  const router = useRouter();

  const onRectangleButtonClick = useCallback(() => {
    router.push("/second-page");
  }, [router]);

  const onAccessCoursesClick = useCallback(() => {
    router.push("/second-page");
  }, [router]);

  const onFrameButtonClick = useCallback(() => {
    window.open(
      "https://youtube.com/playlist?list=PLqndDnO77d_IKce5eMwCr5HVbq7O-cIFZ"
    );
  }, []);

  const onFrameButton1Click = useCallback(() => {
    window.open(
      "https://youtube.com/playlist?list=PL8wEqriDZeq_ltZ4J2brKBga63wQjJ2Yu"
    );
  }, []);

  const onFrameButton2Click = useCallback(() => {
    window.open(
      "https://youtube.com/playlist?list=PL6o08pkcQol7-TlFJl05pEEp4hw418DmM"
    );
  }, []);

  const onFrameButton3Click = useCallback(() => {
    window.open(
      "https://youtube.com/playlist?list=PLgr1-WFNI_jHWShHK9rkLIrBsQ6nUnAqY"
    );
  }, []);

  const onFrameButton4Click = useCallback(() => {
    window.open(
      "https://youtube.com/playlist?list=PLH0kRv5G4W4Dvd-7Md2uSDkAdriNEP2mq"
    );
  }, []);

  const onRectangleButton1Click = useCallback(() => {
    router.push("/sales");
  }, [router]);

  const onRectangleButton2Click = useCallback(() => {
    router.push("/sending-cold-emails");
  }, [router]);

  const onRectangleButton3Click = useCallback(() => {
    router.push("/prompt-engineer");
  }, [router]);

  const onRectangleButton4Click = useCallback(() => {
    router.push("/build-your-own-brand");
  }, [router]);

  const onRectangleButton5Click = useCallback(() => {
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

  return (
    <div className={styles.promptEngineer}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
        <img
          className={styles.screenshot20230425At1047}
          alt=""
          src="/screenshot-20230425-at-1047-1@2x.png"
        />
        <b className={styles.about}>ABOUT</b>
        <button
          className={styles.frameInner}
          onClick={onRectangleButtonClick}
        />
        <button className={styles.accessCourses} onClick={onAccessCoursesClick}>
          Access Courses
        </button>
      </div>
      <div className={styles.promptEngineerChild} />
      <div className={styles.promptEngineerItem} />
      <div className={styles.promptEngineerInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.promptEngineerChild1} />
      <button className={styles.rectangleGroup} onClick={onFrameButtonClick}>
        <div className={styles.frameChild1} />
        <div className={styles.watch}>Watch</div>
      </button>
      <button
        className={styles.rectangleContainer}
        onClick={onFrameButton1Click}
      >
        <div className={styles.frameChild1} />
        <div className={styles.watch}>Watch</div>
      </button>
      <button className={styles.frameButton} onClick={onFrameButton2Click}>
        <div className={styles.frameChild1} />
        <div className={styles.watch}>Watch</div>
      </button>
      <button className={styles.rectangleParent1} onClick={onFrameButton3Click}>
        <div className={styles.frameChild1} />
        <div className={styles.watch}>Watch</div>
      </button>
      <button className={styles.rectangleParent2} onClick={onFrameButton4Click}>
        <div className={styles.frameChild1} />
        <div className={styles.watch}>Watch</div>
      </button>
      <img
        className={styles.screenshot20230430At1231}
        alt=""
        src="/screenshot-20230430-at-1231@2x.png"
      />
      <img
        className={styles.screenshot20230430At1230}
        alt=""
        src="/screenshot-20230430-at-1230@2x.png"
      />
      <b className={styles.promptEngineeringPlaylist}>
        Prompt Engineering [Playlist]
      </b>
      <div className={styles.byTony}>by TONY - Go Code!</div>
      <b className={styles.masteringPromptEngineering}>
        Mastering Prompt Engineering for ChatGPT[Playlist]
      </b>
      <div className={styles.byFixAll}>by Fix All</div>
      <img
        className={styles.screenshot20230430At12311}
        alt=""
        src="/screenshot-20230430-at-12311@2x.png"
      />
      <b className={styles.promptEngineeringPlaylist1}>
        Prompt Engineering [Playlist]
      </b>
      <div className={styles.byAllAbout}>by All About AI</div>
      <img
        className={styles.screenshot20230430At12301}
        alt=""
        src="/screenshot-20230430-at-12301@2x.png"
      />
      <b className={styles.masteringPromptEngineering1}>
        Mastering Prompt Engineering with ChatGPT[Playlist]
      </b>
      <div className={styles.byKlsCreative}>by KL’s Creative World</div>
      <img
        className={styles.screenshot20230430At1229}
        alt=""
        src="/screenshot-20230430-at-1229@2x.png"
      />
      <b className={styles.promptEngineeringUsing}>
        Prompt Engineering using ChatGPT [Playlist]
      </b>
      <div className={styles.byFreeAudio}>by Free Audio Books</div>
      <div className={styles.frameDiv}>
        <div className={styles.allCategoriesParent}>
          <div className={styles.allCategories}>
            <p className={styles.blankLine}>ALL CATEGORIES:</p>
            <p className={styles.blankLine}>&nbsp;</p>
          </div>
          <button
            className={styles.rectangleButton}
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
            className={styles.frameChild9}
            onClick={onRectangleButton5Click}
          />
          <button
            className={styles.publicSpeaking}
            onClick={onPublicSpeakingClick}
          >
            <p className={styles.blankLine}>Public Speaking</p>
          </button>
          <button className={styles.sales} onClick={onSalesClick}>
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
            <div className={styles.frameChild10} />
            <div className={styles.excel}>
              <p className={styles.blankLine}>Excel</p>
            </div>
          </button>
          <button
            className={styles.rectangleParent4}
            onClick={onFrameButton6Click}
          >
            <div className={styles.frameChild11} />
            <div className={styles.webDevelopment}>
              <p className={styles.blankLine}>Web Development</p>
            </div>
          </button>
          <div className={styles.frameChild12} />
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
              className={styles.frameChild13}
              alt=""
              src="/rectangle-19.svg"
            />
            <div className={styles.uiux}>
              <p className={styles.blankLine}>UI/UX</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromptEngineer;
