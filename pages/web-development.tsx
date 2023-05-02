import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./web-development.module.css";
const WebDevelopment: NextPage = () => {
  const router = useRouter();

  const onRectangleButtonClick = useCallback(() => {
    router.push("/second-page");
  }, [router]);

  const onAccessCoursesClick = useCallback(() => {
    router.push("/second-page");
  }, [router]);

  const onFrameButtonClick = useCallback(() => {
    window.open("https://youtu.be/zJSY8tbf_ys");
  }, []);

  const onFrameButton1Click = useCallback(() => {
    window.open(
      "https://youtube.com/playlist?list=PLEiEAq2VkUUKRqRCp9ZsfrB7OmAPKr9qH"
    );
  }, []);

  const onFrameButton2Click = useCallback(() => {
    window.open(
      "https://youtube.com/playlist?list=PL9ooVrP1hQOEloRCBI97ZXkWUg6MJn0Yf"
    );
  }, []);

  const onFrameButton3Click = useCallback(() => {
    window.open("https://youtu.be/nu_pCVPKzTk");
  }, []);

  const onFrameButton4Click = useCallback(() => {
    window.open("https://youtu.be/G3e-cpL7ofc");
  }, []);

  const onFrameButton5Click = useCallback(() => {
    window.open("https://youtu.be/R6RX2Zx96fE");
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

  return (
    <div className={styles.webDevelopment}>
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
      <div className={styles.webDevelopmentChild} />
      <div className={styles.webDevelopmentItem} />
      <div className={styles.webDevelopmentInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.webDevelopmentChild1} />
      <div className={styles.webDevelopmentChild2} />
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
      <button className={styles.rectangleParent3} onClick={onFrameButton5Click}>
        <div className={styles.frameChild1} />
        <div className={styles.watch}>Watch</div>
      </button>
      <img
        className={styles.screenshot20230427At942}
        alt=""
        src="/screenshot-20230427-at-942-1@2x.png"
      />
      <img
        className={styles.screenshot20230427At943}
        alt=""
        src="/screenshot-20230427-at-943-1@2x.png"
      />
      <img
        className={styles.screenshot20230427At944}
        alt=""
        src="/screenshot-20230427-at-944-1@2x.png"
      />
      <img
        className={styles.screenshot20230427At9431}
        alt=""
        src="/screenshot-20230427-at-943-2@2x.png"
      />
      <img
        className={styles.screenshot20230427At9432}
        alt=""
        src="/screenshot-20230427-at-943-3@2x.png"
      />
      <img
        className={styles.screenshot20230427At954}
        alt=""
        src="/screenshot-20230427-at-954-1@2x.png"
      />
      <b className={styles.frontendWebDevelopment}>
        Frontend Web Development Bootcamp Course(JavaScript, HTML,CSS)
      </b>
      <div className={styles.byFreecodecamporg}>by freeCodeCamp.org</div>
      <b className={styles.webDevelopmentTraining}>
        Web Development Training [Playlist]
      </b>
      <div className={styles.bySimplilearn}>by Simplilearn</div>
      <b
        className={styles.htmlCss}
      >{`HTML & CSS Full Course - Beginner to Pro`}</b>
      <div className={styles.bySupersimpledev}>by SuperSimpleDev</div>
      <b className={styles.webDevelopmentTutorial}>
        Web Development Tutorial For Beginners[Playlist]
      </b>
      <div className={styles.byEdureka}>by edureka!</div>
      <b className={styles.fullStackWebContainer}>
        <p className={styles.fullStackWeb}>
          Full Stack Web Development For Beginners
        </p>
      </b>
      <div className={styles.byFreecodecamporg1}>
        <p className={styles.fullStackWeb}>by freeCodeCamp.org</p>
      </div>
      <b className={styles.fullStackWebContainer1}>
        <p className={styles.fullStackWeb}>
          Full Stack Web Development Course 2023
        </p>
      </b>
      <div className={styles.bySimplilearn1}>
        <p className={styles.fullStackWeb}>by Simplilearn</p>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.allCategoriesParent}>
          <div className={styles.allCategories}>
            <p className={styles.fullStackWeb}>ALL CATEGORIES:</p>
            <p className={styles.fullStackWeb}>&nbsp;</p>
          </div>
          <button
            className={styles.rectangleButton}
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
            className={styles.frameChild10}
            onClick={onRectangleButton5Click}
          />
          <button
            className={styles.publicSpeaking}
            onClick={onPublicSpeakingClick}
          >
            <p className={styles.fullStackWeb}>Public Speaking</p>
          </button>
          <button className={styles.sales} onClick={onSalesClick}>
            <p className={styles.fullStackWeb}>Sales</p>
          </button>
          <button
            className={styles.promptEngineering}
            onClick={onPromptEngineeringClick}
          >
            <p className={styles.fullStackWeb}>Prompt Engineering</p>
          </button>
          <button
            className={styles.sendingColdEmailsContainer}
            onClick={onSendingColdEmailsClick}
          >
            <p className={styles.fullStackWeb}>Sending Cold Emails</p>
          </button>
          <button
            className={styles.buildingYourOwnContainer}
            onClick={onBuildingYourOwnClick}
          >
            <p className={styles.fullStackWeb}>
              Building your Own Personal Brand
            </p>
          </button>
          <button
            className={styles.rectangleParent4}
            onClick={onFrameButton6Click}
          >
            <div className={styles.frameChild11} />
            <div className={styles.excel}>
              <p className={styles.fullStackWeb}>Excel</p>
            </div>
          </button>
          <button
            className={styles.rectangleParent5}
            onClick={onFrameButton7Click}
          >
            <div className={styles.frameChild12} />
            <div className={styles.webDevelopment1}>
              <p className={styles.fullStackWeb}>Web Development</p>
            </div>
          </button>
          <div className={styles.frameChild13} />
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
              <p className={styles.fullStackWeb}>People Management</p>
            </div>
          </button>
          <button
            className={styles.vectorParent}
            onClick={onFrameButton10Click}
          >
            <img
              className={styles.frameChild14}
              alt=""
              src="/rectangle-19.svg"
            />
            <div className={styles.uiux}>
              <p className={styles.fullStackWeb}>UI/UX</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;
