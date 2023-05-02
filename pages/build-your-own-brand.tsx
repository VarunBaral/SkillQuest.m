import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./build-your-own-brand.module.css";
const BuildYourOwnBrand: NextPage = () => {
  const router = useRouter();

  const onFrameButtonClick = useCallback(() => {
    window.open("https://youtu.be/VrwBu8DYWkE");
  }, []);

  const onFrameButton1Click = useCallback(() => {
    window.open(
      "https://youtube.com/playlist?list=PLY5k9H2U8j8EREleqRq9gRRUhF24lDQ5e"
    );
  }, []);

  const onFrameButton2Click = useCallback(() => {
    window.open(
      "https://youtube.com/playlist?list=PLzKJi2GjpkEFsV13D3WPm5s6tZVkvKJ1-"
    );
  }, []);

  const onFrameButton3Click = useCallback(() => {
    window.open("https://youtu.be/lR2kaMRgjN4");
  }, []);

  const onFrameButton4Click = useCallback(() => {
    window.open(
      "https://www.youtube.com/watch?v=ikE99ErnW-U&list=PL7WHhFieFlp-9i3WE5vDBZjEPgwVlHLMf"
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
    <div className={styles.buildYourOwnBrand}>
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
      <div className={styles.buildYourOwnBrandChild} />
      <div className={styles.buildYourOwnBrandItem} />
      <div className={styles.buildYourOwnBrandInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.buildYourOwnBrandChild1} />
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
        className={styles.screenshot20230430At1144}
        alt=""
        src="/screenshot-20230430-at-1144@2x.png"
      />
      <b className={styles.learnBrandStrategy}>
        Learn Brand Strategy in 17 Minutes
      </b>
      <div className={styles.byBrandMaster}>by Brand Master Academy</div>
      <img
        className={styles.screenshot20230430At1143}
        alt=""
        src="/screenshot-20230430-at-1143@2x.png"
      />
      <b className={styles.stepChecklistFor}>
        12 Step Checklist For Building a Personal Brand
      </b>
      <div className={styles.byPhilipVandusen}>by Philip VanDusen</div>
      <img
        className={styles.screenshot20230430At11431}
        alt=""
        src="/screenshot-20230430-at-11431@2x.png"
      />
      <img
        className={styles.screenshot20230430At11432}
        alt=""
        src="/screenshot-20230430-at-11432@2x.png"
      />
      <b className={styles.coreMastersBranding}>
        Core Masters Branding Course [Playlist]
      </b>
      <div className={styles.byScottLancasterContainer}>
        <p className={styles.byScottLancaster}>
          by Scott Lancaster | Branding Consultant
        </p>
      </div>
      <b className={styles.buildingYourPersonal}>
        Building Your Personal Brand [Playlist]
      </b>
      <div className={styles.byThefigco}>by TheFigCo</div>
      <img
        className={styles.screenshot20230430At11433}
        alt=""
        src="/screenshot-20230430-at-11433@2x.png"
      />
      <b className={styles.buildingABrand}>Building A Brand [Playlist]</b>
      <div className={styles.byTheFutur}>by The Futur</div>
      <div className={styles.frameDiv}>
        <div className={styles.allCategoriesParent}>
          <div className={styles.allCategories}>
            <p className={styles.byScottLancaster}>ALL CATEGORIES:</p>
            <p className={styles.byScottLancaster}>&nbsp;</p>
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
            <p className={styles.byScottLancaster}>Public Speaking</p>
          </button>
          <button className={styles.sales} onClick={onSalesClick}>
            <p className={styles.byScottLancaster}>Sales</p>
          </button>
          <button
            className={styles.promptEngineering}
            onClick={onPromptEngineeringClick}
          >
            <p className={styles.byScottLancaster}>Prompt Engineering</p>
          </button>
          <button
            className={styles.sendingColdEmailsContainer}
            onClick={onSendingColdEmailsClick}
          >
            <p className={styles.byScottLancaster}>Sending Cold Emails</p>
          </button>
          <button
            className={styles.buildingYourOwnContainer}
            onClick={onBuildingYourOwnClick}
          >
            <p className={styles.byScottLancaster}>
              Building your Own Personal Brand
            </p>
          </button>
          <button
            className={styles.rectangleParent3}
            onClick={onFrameButton5Click}
          >
            <div className={styles.frameChild9} />
            <div className={styles.excel}>
              <p className={styles.byScottLancaster}>Excel</p>
            </div>
          </button>
          <button
            className={styles.rectangleParent4}
            onClick={onFrameButton6Click}
          >
            <div className={styles.frameChild10} />
            <div className={styles.webDevelopment}>
              <p className={styles.byScottLancaster}>Web Development</p>
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
              <p className={styles.byScottLancaster}>People Management</p>
            </div>
          </button>
          <button className={styles.vectorParent} onClick={onFrameButton9Click}>
            <img
              className={styles.frameChild12}
              alt=""
              src="/rectangle-19.svg"
            />
            <div className={styles.uiux}>
              <p className={styles.byScottLancaster}>UI/UX</p>
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

export default BuildYourOwnBrand;
