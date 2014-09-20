#!/usr/bin/env perl

my %descs;
my %names;

while (<>) {
    chomp;
    s/'/\\'/g;
    my ($key, $eng) = split quotemeta '^';
    if (m/(MATERIAL|SPHERES)_([0-9]*)_SHORTDESCRIPTION/) {
        $descs{$2} = $eng;
    } elsif (m/(MATERIAL|SPHERES)_([0-9]*)_NAME/) {
        $names{$2} = $eng;
    }
}

print "descs = {\n";
while (my ($id, $name) = each %names) {
    my $desc = $descs{$id};
    print "    '$name': '$desc',\n";
}
print "}";
