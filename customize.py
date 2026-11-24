#!/usr/bin/env python3
"""
Customization script for Portfolio.
Run this script to update your name, email, phone/whatsapp, and roles across the portfolio.
Usage: python3 customize.py
"""

import sys
import re

CONFIG = {
    # Replace with your details
    "NAME": "Shubham Ojha",
    "ROLE_1": "FULL-STACK DEVELOPER",
    "ROLE_2": "AI BUILDER",
    "BADGE": "CS ENGINEER • INDEPENDENT DEVELOPER",
    "TAGLINE": "Building intelligent software that solves real problems.",
    "EMAIL": "ojha55926@gmail.com",
    "WHATSAPP_NUMBER": "9031864978",
    "GITHUB_URL": "https://github.com/Shubham9031",
    "LINKEDIN_URL": "https://www.linkedin.com/in/shubham-ojha-932500279",
}

def update_portfolio(name, role1, role2, email, whatsapp, github, linkedin):
    js_path = "assets/index-BG2sgnXg.js"
    html_path = "index.html"

    with open(js_path, "r", encoding="utf-8") as f:
        js = f.read()

    # Update email & whatsapp
    js = re.sub(r'email:"[^"]+"', f'email:"{email}"', js)
    js = re.sub(r'number:"\d+"', f'number:"{whatsapp}"', js)
    js = re.sub(r'wa\.me/\d+', f'wa.me/{whatsapp}', js)

    # Update github & linkedin
    js = re.sub(r'href:"https://github\.com[^"]*"', f'href:"{github}"', js)
    js = re.sub(r'href:"https://linkedin\.com[^"]*"', f'href:"{linkedin}"', js)

    with open(js_path, "w", encoding="utf-8") as f:
        f.write(js)

    with open(html_path, "r", encoding="utf-8") as f:
        html = f.read()

    html = re.sub(r'<title>.*?</title>', f'<title>{name} – {role1} &amp; {role2}</title>', html)

    with open(html_path, "w", encoding="utf-8") as f:
        f.write(html)

    print("Portfolio updated successfully!")

if __name__ == "__main__":
    print("Run with custom inputs or modify CONFIG dictionary.")
