from app import app, db, User
import os

with app.app_context():
    users = User.query.all()
    print(f"Total users: {len(users)}")
    for u in users:
        print(f"User: {u.email}, Admin: {u.is_admin}")
