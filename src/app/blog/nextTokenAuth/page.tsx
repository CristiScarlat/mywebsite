import styles from "./page.module.css";


const nextTokenAuthArticle = () => {
    return(
<>
    <article className={styles.container}>
        <header>
            <h1 className="text-center text-white my-4">Securing Next.js API Routes with Token Authentication and HttpOnly Cookies</h1>
        </header>
        <section className={styles.section}>
            <p>When building a web application with Next.js, securing API routes is crucial, especially when handling user authentication and sensitive data. In this guide, we’ll walk through how to protect Next.js API routes using token authentication, storing the token securely in an <strong>httpOnly</strong> cookie.</p>
        </section>

        <section className={styles.section}>
            <h2>Why Use HttpOnly Cookies for Authentication?</h2>
            <p>HttpOnly cookies provide a more secure way to handle authentication tokens because they:</p>
            <ul>
                <li>Prevent client-side JavaScript access, reducing the risk of <strong>XSS (Cross-Site Scripting)</strong> attacks.</li>
                <li>Are automatically sent with every request to the server, simplifying authentication.</li>
                <li>Offer better security compared to local storage for storing tokens.</li>
            </ul>
        </section>

        <section  className={styles.section}>
            <h2>Setting Up an SQLite Database</h2>
            <p>For this project, we use <strong>SQLite</strong>, a lightweight database that integrates well with Next.js. We define utility functions to interact with the database:</p>
            <pre><code>
{`const sqlite3 = require("sqlite3").verbose();
import path from 'path';

const dbFile = path.join(process.cwd(), "dermatiqDB.db");

export const getUsers = async () => {
    const db = new sqlite3.Database(dbFile);
    const users = await new Promise((resolve, reject) => {
        db.all("SELECT * FROM users;", (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
    db.close();
    return users;
};`}
            </code></pre>
            <p>Other functions for adding, updating, finding, and deleting users follow a similar pattern.</p>
        </section>

        <section  className={styles.section}>
            <h2>Implementing API Routes with Token Authentication</h2>

            <h3>1. Creating an Authentication Endpoint</h3>
            <p>First, we create a <strong>login API route</strong> that verifies user credentials, generates a token, and stores it in an <strong>httpOnly</strong> cookie:</p>
            <pre><code>
{`import bcrypt from 'bcryptjs';
import { findUser } from "../../../dbServices/users";
import { serialize } from 'cookie';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { username, password } = JSON.parse(req.body);

    // Find user
    const user = await findUser(username);

    if (!user) {
        return res.status(401).json({ message: 'User not found' });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(401).json({ message: 'Invalid credentials, wrong password' });
    }

    // Generate JWT token
    const token = jwt.sign({ username, role: user.role, id: user.id }, process.env.API_SECRET_KEY, { expiresIn: '1h' });
    res.setHeader('Set-Cookie', serialize('token', token, {
        httpOnly: true,
        secure: true, // Use secure cookies in production
        sameSite: "None",
        maxAge: 3600, // 1 hour
        path: '/', // Make cookie accessible for all routes
    }));

    return res.status(200).json({message:"Successfully logged in", isAuthenticated: isMatch, role: user.role, username: user.username, uid: user.id});
}`}
            </code></pre>

            <h3>2. Protecting API Routes</h3>
            <p>Now, we create a <strong>middleware</strong> function to validate the token in the request cookies:</p>
            <pre><code>
{`import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(request) {
    if (request.method === "OPTIONS") {
        return NextResponse.json({ status: 200 }); // Respond with 200 to OPTIONS requests
    }

    const token = request.cookies.get("token")?.value;
    if (token) {
        try {
            const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.API_SECRET_KEY));
            const modifiedReq = NextResponse.next();
            modifiedReq.headers.set('x-user-name', payload.username);
            return modifiedReq;
        } catch (error) {
            return NextResponse.json({ success: false, message: error.message }, { status: 401 });
        }
    } else {
        return NextResponse.json(
            { success: false, message: 'authentication failed' },
            { status: 401 }
        );
    }
}

export const config = {
    matcher: ['/api/hello', '/api/users/:path*', '/admin/dashboard']
}`}
            </code></pre>
            <h3>3. Using Authentication Middleware in API Routes</h3>
            <p>Example of a <strong>protected route</strong> that fetches user data:</p>
            <pre><code>
{`import { authenticate } from "../../lib/auth";
import { getUsers } from "../../lib/db";

export default async function handler(req, res) {
    const user = authenticate(req, res);
    if (!user.id) return;

    const users = await getUsers();
    return res.status(200).json(users);
}`}
            </code></pre>
        </section>

        <section  className={styles.section}>
            <h2>Logging Out: Clearing the Token</h2>
            <p>To log a user out, we simply clear the <strong>httpOnly</strong> cookie:</p>
            <pre><code>
{`import { serialize } from "cookie";

export default async function handler(req, res) {
    res.setHeader('Set-Cookie', serialize('token', '', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
        sameSite: 'Strict', // Prevent CSRF
        maxAge: 0, // 1 hour
        path: '/', // Make cookie accessible for all routes
    }));

    return res.status(200).json({ message: "Logged out successfully" });
}`}
            </code></pre>
        </section>

        <section  className={styles.section}>
            <h2>Client-Side: Implementing the Login Form</h2>
            <p>Here’s how you can implement a simple login form on the client side:</p>
            <pre><code>
{`import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRouter } from 'next/navigation';

const AdminLogin = () => {
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                body: JSON.stringify({
                    username: formData.get('username'),
                    password: formData.get('password')
                }),
                headers: {
                    Accept: 'application/json',
                }
            });
            const loginResponse = await res.json();
            if (res.status === 200) {
                router.push('/admin/dashboard');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <Form className="mx-auto my-5" style={{ maxWidth: "50rem" }} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Username" name="username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" />
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </div>
    );
};

export default AdminLogin;`}
            </code></pre>
        </section>

        <section  className={styles.section}>
            <h2>Conclusion</h2>
            <p>By implementing token authentication and <strong>httpOnly</strong> cookies, we enhance the security of our Next.js API routes. This approach helps mitigate security risks like <strong>XSS</strong> and simplifies authentication by automatically handling token storage and transmission.</p>
            <h3>Key Takeaways:</h3>
            <ul>
                <li><strong>Use SQLite</strong> for lightweight and efficient data storage.</li>
                <li><strong>Generate JWT tokens</strong> for authentication.</li>
                <li><strong>Store tokens in HttpOnly cookies</strong> to prevent client-side access.</li>
                <li><strong>Protect API routes</strong> by validating tokens before processing requests.</li>
            </ul>
            <p>This setup forms a strong foundation for building secure applications in Next.js. 🚀</p>
        </section>
    </article>
</>

        )
}

export default nextTokenAuthArticle;