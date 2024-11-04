import Router from "next/router";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.title}>
        <Image
        src="/white2bg.png" width={180} height={150}
        alt=""
        />
        <span>Sign in to your account</span>
      </div>
      <div className={styles.fields}>
        <form action="">
          <input type="text" placeholder="Email"/>
          <input type="text" placeholder="Password"/>
          <div className={styles.additionals}>
           <span> <input type="checkbox" name="" id="remember" />
            <label htmlFor="remember">Remember Me</label>
            </span>
            <span>Forgot Password?</span>
          </div>
          <input type="submit" value='LOGIN' className={styles.loginBtn}/>
        </form>
        <Link href="register">
       <span>Do not have an account? Register</span>
       </Link>
      </div>
    </div>
  );
}
