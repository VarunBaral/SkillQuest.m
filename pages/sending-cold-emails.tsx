import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./sending-cold-emails.module.css";
const SendingColdEmails: NextPage = () => {
  const router = useRouter();

  const onRectangleButtonClick = useCallback(() => {
    router.push("/second-page");
  }, [router]);

  const onAccessCoursesClick = useCallback(() => {
    router.push("/second-page");
  }, [router]);

  const onFrameButtonClick = useCallback(() => {
    window.open(
      "https://youtube.com/playlist?list=PLoUVJsDQgZILzTCzU4PjnLNgYgqV1tUL2"
    );
  }, []);

  const onFrameButton1Click = useCallback(() => {
    window.open("https://youtu.be/RAb3WttxM4o");
  }, []);

  const onFrameButton2Click = useCallback(() => {
    window.open("https://youtu.be/1hpqcvTvUTI");
  }, []);

  const onFrameButton3Click = useCallback(() => {
    window.open(
      "https://youtube.com/playlist?list=PL27D0u_m5x1KUBLRNeksTpLLB5yMZ-iep"
    );
  }, []);

  const onFrameButton4Click = useCallback(() => {
    window.open("https://youtu.be/1hpqcvTvUTI");
  }, []);

  const onFrameButton5Click = useCallback(() => {
    window.open("https://youtu.be/-Xy1KdIGI1o");
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
    <div className={styles.sendingColdEmails}>
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
      <div className={styles.sendingColdEmailsChild} />
      <div className={styles.sendingColdEmailsItem} />
      <div className={styles.sendingColdEmailsInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.sendingColdEmailsChild1} />
      <div className={styles.sendingColdEmailsChild2} />
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
        className={styles.screenshot20230427At1057}
        alt=""
        src="/screenshot-20230427-at-1057-1@2x.png"
      />
      <img
        className={styles.screenshot20230427At1058}
        alt=""
        src="/screenshot-20230427-at-1058-1@2x.png"
      />
      <img
        className={styles.screenshot20230427At10581}
        alt=""
        src="/screenshot-20230427-at-1058-3@2x.png"
      />
      <img
        className={styles.screenshot20230427At1059}
        alt=""
        src="/screenshot-20230427-at-1059-1@2x.png"
      />
      <img
        className={styles.screenshot20230427At10571}
        alt=""
        src="/screenshot-20230427-at-1057-3@2x.png"
      />
      <img
        className={styles.screenshot20230427At1100}
        alt=""
        src="/screenshot-20230427-at-1100-1@2x.png"
      />
      <b className={styles.howToColdContainer}>
        <p className={styles.howToCold}>How to Cold Email Clients</p>
      </b>
      <div className={styles.byPatrickDangContainer}>
        <p className={styles.howToCold}>by Patrick Dang</p>
      </div>
      <div className={styles.byPeakFrameworks}>by Peak Frameworks</div>
      <b className={styles.howToWrite}>How to write cold emails</b>
      <div className={styles.byWarikoo}>by warikoo</div>
      <b className={styles.coldEmailBest}>
        Cold Email Best Practices[Playlist]
      </b>
      <div className={styles.byLemlist}>by lemlist</div>
      <b className={styles.coldEmailingplaylist}>Cold Emailing[Playlist]</b>
      <div className={styles.bySalesScripter}>by Sales Scripter</div>
      <div className={styles.coldEmailingCourseContainer}>
        <p className={styles.howToCold}>
          <b>Cold Emailing Course: How to Write Cold Emails That Convert</b>
        </p>
        <p className={styles.byColdTo}>By Cold to Gold Selling with Uptics</p>
      </div>
      <b className={styles.coldEMailingTheContainer}>
        <p className={styles.howToCold}>
          Cold E-mailing (The Best Skill to Get a Job)
        </p>
      </b>
      <div className={styles.frameDiv}>
        <div className={styles.allCategoriesParent}>
          <div className={styles.allCategories}>
            <p className={styles.howToCold}>ALL CATEGORIES:</p>
            <p className={styles.howToCold}>&nbsp;</p>
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
            <p className={styles.howToCold}>Public Speaking</p>
          </button>
          <button className={styles.sales} onClick={onSalesClick}>
            <p className={styles.howToCold}>Sales</p>
          </button>
          <button
            className={styles.promptEngineering}
            onClick={onPromptEngineeringClick}
          >
            <p className={styles.howToCold}>Prompt Engineering</p>
          </button>
          <button
            className={styles.sendingColdEmailsContainer}
            onClick={onSendingColdEmailsClick}
          >
            <p className={styles.howToCold}>Sending Cold Emails</p>
          </button>
          <button
            className={styles.buildingYourOwnContainer}
            onClick={onBuildingYourOwnClick}
          >
            <p className={styles.howToCold}>Building your Own Personal Brand</p>
          </button>
          <button
            className={styles.rectangleParent4}
            onClick={onFrameButton6Click}
          >
            <div className={styles.frameChild11} />
            <div className={styles.excel}>
              <p className={styles.howToCold}>Excel</p>
            </div>
          </button>
          <button
            className={styles.rectangleParent5}
            onClick={onFrameButton7Click}
          >
            <div className={styles.frameChild12} />
            <div className={styles.webDevelopment}>
              <p className={styles.howToCold}>Web Development</p>
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
              <p className={styles.howToCold}>People Management</p>
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
              <p className={styles.howToCold}>UI/UX</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendingColdEmails;
