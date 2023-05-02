import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./public-speaking.module.css";
const PublicSpeaking: NextPage = () => {
  const router = useRouter();

  const onFrameButtonClick = useCallback(() => {
    window.open("https://youtu.be/962eYqe--Yc");
  }, []);

  const onFrameButton1Click = useCallback(() => {
    window.open("https://youtu.be/Jclmabun4KU");
  }, []);

  const onFrameButton2Click = useCallback(() => {
    window.open("https://youtu.be/xSp78RwcAS4");
  }, []);

  const onFrameButton3Click = useCallback(() => {
    window.open("https://youtu.be/zaAdAd5iotM");
  }, []);

  const onFrameButton4Click = useCallback(() => {
    window.open(
      "https://youtube.com/playlist?list=PLlup9oTyUUAvP6Hds39DvwBI44JOk-Wln"
    );
  }, []);

  const onFrameButton5Click = useCallback(() => {
    window.open("https://youtu.be/80UVjkcxGmA");
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

  const onPublicSpeaking1Click = useCallback(() => {
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
    <div className={styles.publicSpeaking}>
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
      <div className={styles.publicSpeakingChild} />
      <div className={styles.publicSpeakingItem} />
      <div className={styles.publicSpeakingInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.publicSpeakingChild1} />
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
        className={styles.screenshot20230429At1115}
        alt=""
        src="/screenshot-20230429-at-1115@2x.png"
      />
      <b className={styles.tipsToImprove}>
        4 Tips to IMPROVE Your Public Speaking - How to Captivate an Audience
      </b>
      <div className={styles.byMotivation2study}>by Motivation2Study</div>
      <img
        className={styles.screenshot20230429At11151}
        alt=""
        src="/screenshot-20230429-at-11151@2x.png"
      />
      <b className={styles.howToBe}>How to Be a Great Public Speaker</b>
      <div className={styles.byValuetainment}>by Valuetainment</div>
      <img
        className={styles.screenshot20230429At11152}
        alt=""
        src="/screenshot-20230429-at-11152@2x.png"
      />
      <b className={styles.publicSpeaking1}>
        Public Speaking - OpenClassrooms Full Course
      </b>
      <div className={styles.byOpenclassroomsIn}>
        by OpenClassrooms in English
      </div>
      <img
        className={styles.screenshot20230429At11153}
        alt=""
        src="/screenshot-20230429-at-11153@2x.png"
      />
      <b className={styles.overcomeTheFear}>
        Overcome the Fear of Public Speaking
      </b>
      <div className={styles.bySadhguru}>by Sadhguru</div>
      <img
        className={styles.screenshot20230429At1114}
        alt=""
        src="/screenshot-20230429-at-1114@2x.png"
      />
      <b className={styles.thePublicSpeaking}>
        The Public speaking lesson you never had | DK. |
      </b>
      <div className={styles.byTedxTalks}>by TEDx Talks</div>
      <div className={styles.frameDiv}>
        <div className={styles.frameChild5} />
        <button
          className={styles.rectangleParent3}
          onClick={onFrameButton5Click}
        >
          <div className={styles.frameInner} />
          <div className={styles.watch}>Watch</div>
        </button>
        <img
          className={styles.screenshot20230426At610}
          alt=""
          src="/screenshot-20230426-at-610-2@2x.png"
        />
        <b className={styles.howIOvercameContainer}>
          <p className={styles.howIOvercame}>
            How I Overcame My Fear of Public Speaking | Danish Dhamani
          </p>
        </b>
        <div className={styles.byTedxTalks1}>by Tedx Talks</div>
      </div>
      <div className={styles.publicSpeakingInner1}>
        <div className={styles.allCategoriesParent}>
          <div className={styles.allCategories}>
            <p className={styles.howIOvercame}>ALL CATEGORIES:</p>
            <p className={styles.howIOvercame}>&nbsp;</p>
          </div>
          <button
            className={styles.rectangleButton}
            onClick={onRectangleButtonClick}
          />
          <button
            className={styles.frameChild7}
            onClick={onRectangleButton1Click}
          />
          <button
            className={styles.frameChild8}
            onClick={onRectangleButton2Click}
          />
          <button
            className={styles.frameChild9}
            onClick={onRectangleButton3Click}
          />
          <button
            className={styles.frameChild10}
            onClick={onRectangleButton4Click}
          />
          <button
            className={styles.publicSpeaking2}
            onClick={onPublicSpeaking1Click}
          >
            <p className={styles.howIOvercame}>Public Speaking</p>
          </button>
          <button className={styles.sales} onClick={onSalesClick}>
            <p className={styles.howIOvercame}>Sales</p>
          </button>
          <button
            className={styles.promptEngineering}
            onClick={onPromptEngineeringClick}
          >
            <p className={styles.howIOvercame}>Prompt Engineering</p>
          </button>
          <button
            className={styles.sendingColdEmailsContainer}
            onClick={onSendingColdEmailsClick}
          >
            <p className={styles.howIOvercame}>Sending Cold Emails</p>
          </button>
          <button
            className={styles.buildingYourOwnContainer}
            onClick={onBuildingYourOwnClick}
          >
            <p className={styles.howIOvercame}>
              Building your Own Personal Brand
            </p>
          </button>
          <button
            className={styles.rectangleParent4}
            onClick={onFrameButton6Click}
          >
            <div className={styles.frameChild11} />
            <div className={styles.excel}>
              <p className={styles.howIOvercame}>Excel</p>
            </div>
          </button>
          <button
            className={styles.rectangleParent5}
            onClick={onFrameButton7Click}
          >
            <div className={styles.frameChild12} />
            <div className={styles.webDevelopment}>
              <p className={styles.howIOvercame}>Web Development</p>
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
              <p className={styles.howIOvercame}>People Management</p>
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
              <p className={styles.howIOvercame}>UI/UX</p>
            </div>
          </button>
        </div>
      </div>
      <div className={styles.rectangleParent6}>
        <button
          className={styles.frameChild15}
          onClick={onRectangleButton5Click}
        />
        <button className={styles.accessCourses} onClick={onAccessCoursesClick}>
          Access Courses
        </button>
      </div>
    </div>
  );
};

export default PublicSpeaking;
