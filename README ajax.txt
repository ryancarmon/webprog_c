Mögliche Aufrufe:
-ajax.php?action=timestamp
	Liefert den Timestamp des aktuellsten Posts (Attribut 'time' als int)
-ajax.php?action=posts
	Liefert alle Posts im JSON Format (Attribut 'posts' als JSON-Array)
-ajax.php?action=addpost
	Erwartet den POST-Parameter 'text' und fügt dann einen Post für den aktuellen
	Benutzer mit dem übergebenen Text ein

Alle Funktionen liefern JSON-Parameter 'success' zurück. Dieser ist entweder 0 oder 1

Zum Testen ohne Login läuft das Skript auch unter:
	ryan-carmon.de/wp_c/ajax.php

Für die Funktion addpost ist aber dann der zusätzliche POST-Parameter user (USER-ID!!!) erforderlich, sonst können Posts keinem Benutzer zugeordnet werden

