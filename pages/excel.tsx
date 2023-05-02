import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./excel.module.css";
const Excel: NextPage = () => {
  const router = useRouter();

  const onRectangleButtonClick = useCallback(() => {
    router.push("/second-page");
  }, [router]);

  const onAccessCoursesClick = useCallback(() => {
    router.push("/second-page");
  }, [router]);

  const onFrameButtonClick = useCallback(() => {
    window.open("https://youtu.be/Vl0H-qTclOg");
  }, []);

  const onFrameButton1Click = useCallback(() => {
    window.open("https://youtu.be/8Ob8Hre_SnI");
  }, []);

  const onFrameButton2Click = useCallback(() => {
    window.open("https://youtu.be/ormRboQsB-I");
  }, []);

  const onFrameButton3Click = useCallback(() => {
    window.open(
      "https://youtube.com/playlist?list=PL_iwD7O7FG7jzLQIYm6-9Gx3hvXVUG7C5"
    );
  }, []);

  const onFrameButton4Click = useCallback(() => {
    window.open(
      "https://youtube.com/playlist?list=PLmkaw6oRnRv8lAKbKbflJRqS-9wuYNWUw"
    );
  }, []);

  const onFrameButton5Click = useCallback(() => {
    window.open("https://youtu.be/TpOIGij43AA");
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
    <div className={styles.excel}>
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
      <div className={styles.excelChild} />
      <div className={styles.excelItem} />
      <div className={styles.excelInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.excelChild1} />
      <div className={styles.excelChild2} />
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
        className={styles.screenshot20230426At736}
        alt=""
        src="/screenshot-20230426-at-736-1@2x.png"
      />
      <b className={styles.microsoftExcelTutorial}>
        Microsoft Excel Tutorial for Beginners - Full Course
      </b>
      <div className={styles.byFreecodecamporg}>
        <p className={styles.microfostExcelTutorial}>by freeCodeCamp.org</p>
      </div>
      <img
        className={styles.screenshot20230426At7361}
        alt=""
        src="/screenshot-20230426-at-736-2@2x.png"
      />
      <img
        className={styles.screenshot20230426At738}
        alt=""
        src="/screenshot-20230426-at-738-1@2x.png"
      />
      <b className={styles.microfostExcelTutorialContainer}>
        <p className={styles.microfostExcelTutorial}>
          Microfost Excel Tutorial for Beginners
        </p>
      </b>
      <div className={styles.byProgrammingknowlege}>by ProgrammingKnowlege</div>
      <b className={styles.advancedExcelFull}>
        Advanced Excel Full Course 2023
      </b>
      <div className={styles.bySimplilearn}>
        <p className={styles.microfostExcelTutorial}>by Simplilearn</p>
      </div>
      <img
        className={styles.screenshot20230426At7362}
        alt=""
        src="/screenshot-20230426-at-736-4@2x.png"
      />
      <b className={styles.excelPlaylist}>Excel [Playlist]</b>
      <div
        className={styles.byTechnologyFor}
      >{`by Technology for Teachers and Students `}</div>
      <img
        className={styles.screenshot20230426At737}
        alt=""
        src="/screenshot-20230426-at-737-1@2x.png"
      />
      <b className={styles.microsoftExcelBeginners}>
        Microsoft Excel Beginner’s Tutorials [Playlist]
      </b>
      <div className={styles.byTeachersTech}>by Teacher’s Tech</div>
      <img
        className={styles.screenshot20230426At7371}
        alt=""
        src="/screenshot-20230426-at-737-4@2x.png"
      />
      <b className={styles.theUltimateExcel}>The Ultimate Excel Tutorial</b>
      <div className={styles.bySimonSez}>by Simon Sez IT</div>
      <div className={styles.frameDiv}>
        <div className={styles.allCategoriesParent}>
          <div className={styles.allCategories}>
            <p className={styles.microfostExcelTutorial}>ALL CATEGORIES:</p>
            <p className={styles.microfostExcelTutorial}>&nbsp;</p>
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
            <p className={styles.microfostExcelTutorial}>Public Speaking</p>
          </button>
          <button className={styles.sales} onClick={onSalesClick}>
            <p className={styles.microfostExcelTutorial}>Sales</p>
          </button>
          <button
            className={styles.promptEngineering}
            onClick={onPromptEngineeringClick}
          >
            <p className={styles.microfostExcelTutorial}>Prompt Engineering</p>
          </button>
          <button
            className={styles.sendingColdEmailsContainer}
            onClick={onSendingColdEmailsClick}
          >
            <p className={styles.microfostExcelTutorial}>Sending Cold Emails</p>
          </button>
          <button
            className={styles.buildingYourOwnContainer}
            onClick={onBuildingYourOwnClick}
          >
            <p className={styles.microfostExcelTutorial}>
              Building your Own Personal Brand
            </p>
          </button>
          <button
            className={styles.rectangleParent4}
            onClick={onFrameButton6Click}
          >
            <div className={styles.frameChild11} />
            <div className={styles.excel1}>
              <p className={styles.microfostExcelTutorial}>Excel</p>
            </div>
          </button>
          <button
            className={styles.rectangleParent5}
            onClick={onFrameButton7Click}
          >
            <div className={styles.frameChild12} />
            <div className={styles.webDevelopment}>
              <p className={styles.microfostExcelTutorial}>Web Development</p>
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
              <p className={styles.microfostExcelTutorial}>People Management</p>
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
              <p className={styles.microfostExcelTutorial}>UI/UX</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Excel;
