import csv
import json
import uuid
import random

# Input and output file paths
input_csv = "C:/MySoftwares/Movie-Review-App-React/python/MovieGenre.csv"
output_json = "movies_data.json"

# Some sample data to enrich records
sample_cast = [
    ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
    ["Tom Cruise", "Emily Blunt", "Simon Pegg"],
    ["Chris Evans", "Scarlett Johansson", "Robert Downey Jr."],
    ["Ryan Gosling", "Emma Stone", "Margot Robbie"],
    ["Zendaya", "Timothée Chalamet", "Florence Pugh"],
    ["Christian Bale", "Anne Hathaway", "Michael Caine"]
]

sample_directors = [
    "Christopher Nolan", "Steven Spielberg", "James Cameron",
    "Denis Villeneuve", "Greta Gerwig", "Martin Scorsese",
    "Taika Waititi", "Quentin Tarantino"
]

sample_posters = [
    "https://c4.wallpaperflare.com/wallpaper/574/531/642/inception-2010-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/853/678/200/night-city-buildings-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/82/200/693/cyberpunk-city-future-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/453/501/1021/space-galaxy-stars-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/948/506/398/galaxy-nebula-stars-wallpaper-preview.jpg"
]

# Helper function to create realistic random ratings
def generate_rating():
    return round(random.uniform(6.5, 9.0), 1)

movies = []

# Read CSV file
with open(input_csv, encoding="latin1") as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        movie = {
            "id": uuid.uuid4().hex[:24],
            "title": row.get("Title") or row.get("title", "Unknown Title"),
            "year": int(row.get("Year", random.randint(2000, 2025))),
            "genre": [g.strip() for g in row.get("Genre", "").split(",") if g.strip()],
            "director": random.choice(sample_directors),
            "cast": random.choice(sample_cast),
            "rating": row.get("Score") or generate_rating(),
            "poster": row.get("Poster") or random.choice(sample_posters),
            "description": f"A thrilling story of {row.get('Title', 'an unknown journey')} exploring deep human emotions and conflicts."
        }
        movies.append(movie)

# Save to JSON file
with open(output_json, "w", encoding="utf-8") as jsonfile:
    json.dump(movies, jsonfile, indent=2, ensure_ascii=False)

print(f"✅ Generated {len(movies)} movie records in '{output_json}'")
