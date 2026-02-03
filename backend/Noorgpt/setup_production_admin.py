#!/usr/bin/env python3
"""
Run this script to add the admin user to the PRODUCTION database on Render.
This ensures the admin account works on the hosted backend.
"""

import os
import sys

# Add production database URL
PRODUCTION_DB = "postgresql://database_bhkm_user:EVbFvnDd25ynoe5lHiV22w1ZYx8Be7A4@dpg-d604a41r0fns73eo2geg-a.virginia-postgres.render.com/database_bhkm"

os.environ['DATABASE_URL'] = PRODUCTION_DB

from app import app, db, User
from datetime import datetime

with app.app_context():
    try:
        # Check if admin user exists
        admin_email = "nooriabdurahman084@gmail.com"
        admin_password = "Shirahmad1."
        
        user = User.query.filter_by(email=admin_email).first()
        
        if user:
            print(f"✓ User {admin_email} exists in PRODUCTION database")
            print(f"  - is_admin: {user.is_admin}")
            print(f"  - message_count: {user.message_count}")
            print(f"  - subscription_expiry: {user.subscription_expiry}")
            
            # Ensure admin status is correct
            if not user.is_admin:
                user.is_admin = True
                user.password = admin_password
                user.message_count = 0
                db.session.commit()
                print(f"✓ Updated to admin status in PRODUCTION")
        else:
            # Create new admin user
            new_user = User(
                email=admin_email,
                password=admin_password,
                is_admin=True,
                message_count=0,
                subscription_expiry=None
            )
            db.session.add(new_user)
            db.session.commit()
            print(f"✓ Created new admin user in PRODUCTION: {admin_email}")
        
        print("\n✅ PRODUCTION DATABASE READY!")
        print(f"Admin can login at: https://noorgpt-irxy.onrender.com")
        
    except Exception as e:
        print(f"❌ Error: {e}")
        sys.exit(1)
