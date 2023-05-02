import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./uiux.module.css";
const Uiux: NextPage = () => {
  const router = useRouter();

  const onFrameButtonClick = useCallback(() => {
    window.open(
      "https://youtube.com/playlist?list=PLttcEXjN1UcHZj_6PaZYyh9PzPFgKHdB1"
    );
  }, []);

  const onFrameButton1Click = useCallback(() => {
    window.open("https://youtu.be/kbZejnPXyLM");
  }, []);

  const onFrameButton2Click = useCallback(() => {
    window.open(
      "https://youtube.com/playlist?list=PLW-zSkCnZ-gBtmXf9AfRbA90GnBv7o2gS"
    );
  }, []);

  const onFrameButton3Click = useCallback(() => {
    window.open("https://youtu.be/jwCmIBJ8Jtc");
  }, []);

  const onFrameButton4Click = useCallback(() => {
    window.open(
      "https://youtube.com/playlist?list=PLFW6ct83_wC_N-IrrU60lH4G0dV6u1B4n"
    );
  }, []);

  const onFrameButton5Click = useCallback(() => {
    window.open("https://www.youtube.com/live/spGDKJNq-EE?feature=share");
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

  const onFrameButton6Click = useCallback(() => {
    router.push("/excel");
  }, [router]);

  const onFrameButton7Click = useCallback(() => {
    router.push("/web-development");
  }, [router]);

  const onFrameButton8Click = useCallback(() => {
    router.push("/python");
  }, [router]);

  const onFrameButton9Click = useCallback(() => {
    router.push("/people-management");
  }, [router]);

  const onFrameButton10Click = useCallback(() => {
    router.push("/uiux");
  }, [router]);

  const onRectangleButton5Click = useCallback(() => {
    router.push("/second-page");
  }, [router]);

  const onAccessCoursesClick = useCallback(() => {
    router.push("/second-page");
  }, [router]);

  return (
    <div className={styles.uiux}>
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
      <div className={styles.uiuxChild} />
      <div className={styles.uiuxItem} />
      <div className={styles.uiuxInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.uiuxChild1} />
      <div className={styles.uiuxChild2} />
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
      <button className={styles.rectangleParent3} onClick={onFrameButton5Click}>
        <div className={styles.frameInner} />
        <div className={styles.watch}>Watch</div>
      </button>
      <img
        className={styles.screenshot20230430At1222}
        alt=""
        src="/screenshot-20230430-at-1222@2x.png"
      />
      <img
        className={styles.screenshot20230430At1221}
        alt=""
        src="/screenshot-20230430-at-1221@2x.png"
      />
      <b className={styles.freeUxDesign}>Free UX Design Course [Playlist]</b>
      <div className={styles.byBringYour}>by Bring Your Own Laptop</div>
      <b className={styles.freeFigmaUx}>
        Free Figma UX Design UI Essentials Course
      </b>
      <div className={styles.byBringYour1}>by Bring Your Own Laptop</div>
      <img
        className={styles.screenshot20230430At12211}
        alt=""
        src="/screenshot-20230430-at-12211@2x.png"
      />
      <b className={styles.learnFigmaFor}>
        Learn Figma for UX/UI Design master course [Playlist]
      </b>
      <div className={styles.bySelfstudySpace}>by Selfstudy Space</div>
      <img
        className={styles.screenshot20230430At12212}
        alt=""
        src="/screenshot-20230430-at-12212@2x.png"
      />
      <b className={styles.figmaTutorialFor}>Figma Tutorial for UI Design</b>
      <div className={styles.byFreecodecamporg}>by freeCodeCamp.org</div>
      <img
        className={styles.screenshot20230430At1220}
        alt=""
        src="/screenshot-20230430-at-1220@2x.png"
      />
      <b className={styles.uxuiplaylist}>UX/UI[Playlist]</b>
      <div className={styles.byGfxmentor}>by GFXMentor</div>
      <img
        className={styles.screenshot20230430At12201}
        alt=""
        src="/screenshot-20230430-at-12201@2x.png"
      />
      <b className={styles.uiuxCourse}>{`UI/UX Course `}</b>
      <div className={styles.byIntellipaat}>by Intellipaat</div>
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
            className={styles.frameChild6}
            onClick={onRectangleButton1Click}
          />
          <button
            className={styles.frameChild7}
            onClick={onRectangleButton2Click}
          />
          <button
            className={styles.frameChild8}
            onClick={onRectangleButton3Click}
          />
          <button
            className={styles.frameChild9}
            onClick={onRectangleButton4Click}
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
            className={styles.rectangleParent4}
            onClick={onFrameButton6Click}
          >
            <div className={styles.frameChild10} />
            <div className={styles.excel}>
              <p className={styles.blankLine}>Excel</p>
            </div>
          </button>
          <button
            className={styles.rectangleParent5}
            onClick={onFrameButton7Click}
          >
            <div className={styles.frameChild11} />
            <div className={styles.webDevelopment}>
              <p className={styles.blankLine}>Web Development</p>
            </div>
          </button>
          <div className={styles.frameChild12} />
          <button
            className={styles.pythonWrapper}
            onClick={onFrameButton8Click}
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
            onClick={onFrameButton9Click}
          >
            <div className={styles.peopleManagement}>
              <p className={styles.blankLine}>People Management</p>
            </div>
          </button>
          <button
            className={styles.vectorParent}
            onClick={onFrameButton10Click}
          >
            <img
              className={styles.frameChild13}
              alt=""
              src="/rectangle-19.svg"
            />
            <div className={styles.uiux1}>
              <p className={styles.blankLine}>UI/UX</p>
            </div>
          </button>
        </div>
      </div>
      <div className={styles.rectangleParent6}>
        <button
          className={styles.frameChild14}
          onClick={onRectangleButton5Click}
        />
        <button className={styles.accessCourses} onClick={onAccessCoursesClick}>
          Access Courses
        </button>
      </div>
    </div>
  );
};

export default Uiux;
