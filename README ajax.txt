M�gliche Aufrufe:
-ajax.php?action=timestamp
	Liefert den Timestamp des aktuellsten Posts (Attribut 'time' als int)
-ajax.php?action=posts
	Liefert alle Posts im JSON Format (Attribut 'posts' als JSON-Array)
-ajax.php?action=addpost
	Erwartet den POST-Parameter 'text' und f�gt dann einen Post f�r den aktuellen
	Benutzer mit dem �bergebenen Text ein

Alle Funktionen liefern JSON-Parameter 'success' zur�ck. Dieser ist entweder 0 oder 1

Zum Testen ohne Login l�uft das Skript auch unter:
	ryan-carmon.de/wp_c/ajax.php

F�r die Funktion addpost ist aber dann der zus�tzliche POST-Parameter user (USER-ID!!!) erforderlich, sonst k�nnen Posts keinem Benutzer zugeordnet werden

