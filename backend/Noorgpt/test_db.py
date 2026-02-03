import os
from sqlalchemy import create_engine
from sqlalchemy.sql import text
from dotenv import load_dotenv

load_dotenv()

db_url = os.environ.get('DATABASE_URL')
if db_url and db_url.startswith("postgres://"):
    db_url = db_url.replace("postgres://", "postgresql://", 1)

print(f"Testing connection to: {db_url.split('@')[-1]}") 

try:
    engine = create_engine(db_url, connect_args={'connect_timeout': 10})
    with engine.connect() as conn:
        result = conn.execute(text("SELECT 1"))
        print("Connection successful:", result.fetchone())
except Exception as e:
    print("Connection failed:", str(e))
