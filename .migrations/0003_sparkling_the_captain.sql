CREATE TABLE `program` (
	`code` text PRIMARY KEY NOT NULL,
	`nane` text NOT NULL,
	`number_of_years` integer NOT NULL,
	`school_code` text NOT NULL,
	FOREIGN KEY (`school_code`) REFERENCES `school`(`code`) ON UPDATE no action ON DELETE no action
);
