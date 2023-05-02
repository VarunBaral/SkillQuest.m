import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./people-management.module.css";
const PeopleManagement: NextPage = () => {
  const router = useRouter();

  const onFrameButtonClick = useCallback(() => {
    window.open("https://youtu.be/kARkOdRHaj8");
  }, []);

  const onFrameButton1Click = useCallback(() => {
    window.open("https://youtu.be/i2VLOLRCl-M");
  }, []);

  const onFrameButton2Click = useCallback(() => {
    window.open("https://youtu.be/gLBf8FhgCFc");
  }, []);

  const onFrameButton3Click = useCallback(() => {
    window.open("https://youtu.be/xHBhFKBLhWs");
  }, []);

  const onFrameButton4Click = useCallback(() => {
    window.open("https://youtu.be/PWmhl6rzVpM");
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
    <div className={styles.peopleManagement}>
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
      <div className={styles.peopleManagementChild} />
      <div className={styles.peopleManagementItem} />
      <div className={styles.peopleManagementInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.peopleManagementChild1} />
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
      <img
        className={styles.screenshot20230429At1054}
        alt=""
        src="/screenshot-20230429-at-1054@2x.png"
      />
      <b className={styles.howToDeal}>
        How to Deal with Difficult People | Jay Johnson |
      </b>
      <div className={styles.byTedxTalks}>by Tedx Talks</div>
      <img
        className={styles.screenshot20230429At10541}
        alt=""
        src="/screenshot-20230429-at-10541@2x.png"
      />
      <b className={styles.peopleManagementInterview}>
        PEOPLE MANAGEMENT Interview Questions And Answers
      </b>
      <div className={styles.byCareervidz}>by CareerVidz</div>
      <img
        className={styles.screenshot20230429At10542}
        alt=""
        src="/screenshot-20230429-at-10542@2x.png"
      />
      <b className={styles.learnHowTo}>
        Learn how to manage people and be a better leader
      </b>
      <div className={styles.byWorkforceSingapore}>by Workforce Singapore</div>
      <img
        className={styles.screenshot20230429At10543}
        alt=""
        src="/screenshot-20230429-at-10543@2x.png"
      />
      <b className={styles.managementSkills}>
        Management skills | 10 Management skills every manager should have.
      </b>
      <div className={styles.byEducationleaves}>by Educationleaves</div>
      <img
        className={styles.screenshot20230429At1053}
        alt=""
        src="/screenshot-20230429-at-1053@2x.png"
      />
      <b className={styles.peopleManagement1}>
        People Management | Key components of People Management
      </b>
      <div className={styles.byGreatLearningContainer}>
        <p className={styles.byGreatLearning}>by Great Learning</p>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.allCategoriesParent}>
          <div className={styles.allCategories}>
            <p className={styles.byGreatLearning}>ALL CATEGORIES:</p>
            <p className={styles.byGreatLearning}>&nbsp;</p>
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
            <p className={styles.byGreatLearning}>Public Speaking</p>
          </button>
          <button className={styles.sales} onClick={onSalesClick}>
            <p className={styles.byGreatLearning}>Sales</p>
          </button>
          <button
            className={styles.promptEngineering}
            onClick={onPromptEngineeringClick}
          >
            <p className={styles.byGreatLearning}>Prompt Engineering</p>
          </button>
          <button
            className={styles.sendingColdEmailsContainer}
            onClick={onSendingColdEmailsClick}
          >
            <p className={styles.byGreatLearning}>Sending Cold Emails</p>
          </button>
          <button
            className={styles.buildingYourOwnContainer}
            onClick={onBuildingYourOwnClick}
          >
            <p className={styles.byGreatLearning}>
              Building your Own Personal Brand
            </p>
          </button>
          <button
            className={styles.rectangleParent3}
            onClick={onFrameButton5Click}
          >
            <div className={styles.frameChild9} />
            <div className={styles.excel}>
              <p className={styles.byGreatLearning}>Excel</p>
            </div>
          </button>
          <button
            className={styles.rectangleParent4}
            onClick={onFrameButton6Click}
          >
            <div className={styles.frameChild10} />
            <div className={styles.webDevelopment}>
              <p className={styles.byGreatLearning}>Web Development</p>
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
            <div className={styles.peopleManagement2}>
              <p className={styles.byGreatLearning}>People Management</p>
            </div>
          </button>
          <button className={styles.vectorParent} onClick={onFrameButton9Click}>
            <img
              className={styles.frameChild12}
              alt=""
              src="/rectangle-19.svg"
            />
            <div className={styles.uiux}>
              <p className={styles.byGreatLearning}>UI/UX</p>
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

export default PeopleManagement;
