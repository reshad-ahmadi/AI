from app import app, db, User

with app.app_context():
    # Check if admin user exists
    admin_email = "nooriabdurahman084@gmail.com"
    admin_password = "Shirahmad1."
    
    user = User.query.filter_by(email=admin_email).first()
    
    if user:
        print(f"✓ User {admin_email} already exists in database")
        print(f"  - is_admin: {user.is_admin}")
        print(f"  - message_count: {user.message_count}")
        print(f"  - subscription_expiry: {user.subscription_expiry}")
        
        # Update admin status if needed
        if not user.is_admin:
            user.is_admin = True
            user.password = admin_password
            db.session.commit()
            print(f"✓ Updated user to admin status")
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
        print(f"✓ Created new admin user: {admin_email}")
    
    print("\n--- All users in database: ---")
    all_users = User.query.all()
    for u in all_users:
        print(f"  - {u.email} (admin: {u.is_admin}, msgs: {u.message_count})")
