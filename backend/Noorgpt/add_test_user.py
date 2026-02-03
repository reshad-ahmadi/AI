from app import app, db, User

with app.app_context():
    # Create a test regular user
    test_email = "testuser@example.com"
    test_password = "testpass123"
    
    user = User.query.filter_by(email=test_email).first()
    
    if user:
        print(f"User {test_email} already exists")
        # Reset message count for testing
        user.message_count = 0
        db.session.commit()
        print(f"Reset message count to 0")
    else:
        # Create new regular user (not admin)
        new_user = User(
            email=test_email,
            password=test_password,
            is_admin=False,
            message_count=0,
            subscription_expiry=None
        )
        db.session.add(new_user)
        db.session.commit()
        print(f"✓ Created test user: {test_email}")
    
    print("\n--- All users in database: ---")
    all_users = User.query.all()
    for u in all_users:
        print(f"  - {u.email} (admin: {u.is_admin}, msgs: {u.message_count})")
