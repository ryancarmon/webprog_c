Mögliche Aufrufe:
-ajax.php?action=timestamp
	Liefert den Timestamp des aktuellsten Posts (Attribut 'time' als int)
-ajax.php?action=posts
	Liefert alle Posts im JSON Format (Attribut 'posts' als JSON-Array)
-ajax.php?action=addpost
	Erwartet den POST-Parameter 'text' und fügt dann einen Post für den aktuellen
	Benutzer mit dem übergebenen Text ein

Alle Funktionen liefern JSON-Parameter 'success' zurück. Dieser ist entweder 0 oder 1
