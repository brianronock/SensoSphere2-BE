# SensoSphere Backend

Dies ist das Backend des **SensoSphere V2** Projekts, entwickelt mit **Node.js** und **Express**. Es verwaltet API-Anfragen, Benutzer-Authentifizierung und die Integration von Sensordaten.

## Inhaltsverzeichnis
- [Projektsetup](#projektsetup)
- [Technologien verwendet](#technologien-verwendet)
- [Entwicklungscheckliste](#entwicklungscheckliste)
- [So führen Sie das Projekt aus](#so-führen-sie-das-projekt-aus)
- [Deployment Vorbereitung](#deployment-vorbereitung)

---

## Projektsetup

### GitHub Einrichtung
1. Erstellen Sie ein Repository auf GitHub für das Backend (`SensoSphere2-BE`).
2. Initialisieren Sie Git in Ihrem lokalen Ordner.
3. Verknüpfen Sie Ihren lokalen Ordner mit dem GitHub-Repository.
4. Erstellen Sie eine `README.md` Datei.
5. Machen Sie einen ersten Commit und pushen Sie den Code zu GitHub.

---

## Technologien verwendet
- **Node.js**: JavaScript-Laufzeitumgebung für die Erstellung des Backends.
- **Express**: Web-Framework für den Bau von APIs.
- **MongoDB**: NoSQL-Datenbank zur Speicherung von Sensor- und Benutzerdaten.
- **Mongoose**: ODM für MongoDB.
- **JWT**: Zur Benutzer-Authentifizierung.
- **BcryptJS**: Zum Hashen von Passwörtern.
- **WebSockets**: Für Echtzeit-Updates.
- **MQTT**: Zur Kommunikation von Sensordaten.

---

## Entwicklungscheckliste

### 1. Projektstruktur einrichten
- Erstellen Sie einen `src/` Ordner, um Ihren Backend-Code zu speichern.
- Erstellen Sie die folgenden Unterordner in `src/`:
  - `konfiguration/` (für Konfigurationsdateien)
  - `controller/` (für Routen-Handler)
  - `modelle/` (für MongoDB-Modelle)
  - `routen/` (für API-Routendefinitionen)
  - `middleware/` (für Authentifizierung und andere Middleware)
  - `dienste/` (für externe Dienste wie WebSocket oder MQTT)
  - `utils/` (für Hilfsfunktionen)
  
- Richten Sie die Datei `server.js` als Einstiegspunkt der Anwendung ein.

### 2. Paketinstallation
- Installieren Sie notwendige Pakete:
  ```bash
  npm install express mongoose jsonwebtoken bcryptjs cors joi socket.io swagger-ui-express mongodb dotenv nodemon

3. Umgebungskonfiguration

	•	Erstellen Sie eine .env Datei für Umgebungsvariablen (z.B. MongoDB URI, JWT Secret).
	•	Installieren Sie das dotenv Paket:

npm install dotenv


	•	Konfigurieren Sie die MongoDB-Verbindung in src/konfiguration/db.js.

4. Benutzer-Authentifizierung

	•	Richten Sie das User-Modell in src/modelle/User.js ein, um Benutzerdaten (z.B. Name, E-Mail, Passwort) zu verwalten.
	•	Implementieren Sie die register und login Controller in src/controller/authController.js:
	•	registerUser() zum Erstellen neuer Benutzer.
	•	loginUser() zur Authentifizierung von Benutzern und Rückgabe eines JWT-Tokens.
	•	Richten Sie die Routen für die Authentifizierung in src/routen/authRoutes.js ein:
	•	Benutzerregistrierung (/api/auth/register)
	•	Benutzerlogin (/api/auth/login)
	•	Benutzerprofildaten abrufen (/api/auth/profile)
	•	Implementieren Sie JWT-Authentifizierungs-Middleware in src/middleware/authMiddleware.js, um Routen zu schützen.
	•	Testen Sie die Authentifizierungsrouten mit Postman oder einem ähnlichen Tool.

5. API-Routen

	•	Richten Sie die grundlegenden API-Routen ein:
	•	src/routen/authRoutes.js für die Authentifizierung.
	•	src/routen/sensorRoutes.js für die Verwaltung von Sensordaten.
	•	src/routen/feedRoutes.js für die Verwaltung von Live-Feed-Posts und Kommentaren.
	•	Implementieren Sie Routen-Handler in den jeweiligen Controllern (authController.js, sensorController.js, feedController.js).
	•	Testen Sie die API-Endpunkte mit Postman, um sicherzustellen, dass sie wie erwartet funktionieren.

6. Integration von Sensordaten

	•	Richten Sie das Sensor-Modell in src/modelle/Sensor.js ein, um Sensorinformationen zu speichern.
	•	Implementieren Sie CRUD-Operationen für Sensordaten in src/controller/sensorController.js:
	•	Sensordaten erstellen.
	•	Sensordaten lesen.
	•	Sensordaten aktualisieren.
	•	Sensordaten löschen.
	•	Richten Sie Routen für Sensordaten in src/routen/sensorRoutes.js ein.
	•	Integrieren Sie MQTT für Echtzeit-Sensordaten-Streaming in src/dienste/mqttService.js.
	•	Testen Sie die Sensordaten-Endpunkte mit Postman.

7. Echtzeit-Funktionen

	•	Richten Sie die WebSocket-Integration für Echtzeit-Updates in src/dienste/websocketService.js ein:
	•	Implementieren Sie WebSocket-Verbindungen für den Versand von Echtzeit-Sensordaten.
	•	Senden Sie Echtzeit-Benachrichtigungen an das Frontend für neue Sensordaten oder Warnungen.
	•	Integrieren Sie die WebSocket-Funktionalität in bestehende Routen.
	•	Testen Sie WebSocket-Verbindungen mit WebSocket-Tools (z.B. wscat oder einem Online-WebSocket-Tester).

8. Fehlerbehandlung

	•	Implementieren Sie Middleware zur globalen Fehlerbehandlung in src/middleware/errorHandler.js:
	•	Fangen Sie häufige Fehler ab, wie fehlende Felder, ungültige Eingaben oder Authentifizierungsfehler.
	•	Geben Sie benutzerfreundliche Fehlermeldungen über die API zurück.
	•	Testen Sie die Fehlerbehandlung, indem Sie ungültige Anfragen senden und sicherstellen, dass die Fehler korrekt behandelt werden.

So führen Sie das Projekt aus

	1.	Klonen Sie das Repository:

git clone git@github.com:brianronock/SensoSphere2-BE.git


	2.	Installieren Sie die Abhängigkeiten:

npm install


	3.	Richten Sie die .env Datei mit Ihrer Konfiguration ein:

MONGODB_URI=<Ihre_MongoDB_URI>
JWT_SECRET=<Ihr_JWT_Secret>
MQTT_BROKER_URL=<Ihr_MQTT_Broker_URL>


	4.	Starten Sie das Projekt:

npm start



Deployment Vorbereitung

	•	Fügen Sie eine .gitignore Datei hinzu, um unnötige Dateien wie node_modules/ und .env auszuschließen:

# Node modules
node_modules/

# Environment variables
.env

# Logs
logs/
*.log


	•	Stellen Sie sicher, dass der gesamte Code committet und zu GitHub gepusht wurde:

git add .
git commit -m "Vorbereitung für Deployment"
git push


	•	Bereiten Sie eine Produktionsumgebung für das Deployment vor (z.B. auf Heroku, AWS oder einer anderen Plattform).
	•	Konfigurieren Sie Umgebungsvariablen für die Produktion (z.B. MongoDB URI, JWT Secret).
	•	Deployen Sie das Backend und testen Sie es in einer Live-Umgebung.

