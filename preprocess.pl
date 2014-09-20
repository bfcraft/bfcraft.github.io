#!/usr/bin/env perl

my %name_to_id;
my @id_to_name;
my @needs;
my @produces;
my $next_id = 0;

sub get_id {
    my ($name, ) = @_;
    if (exists $name_to_id{$name}) {
        return $name_to_id{$name};
    }
    my $id = $next_id++;
    $name_to_id{$name} = $id;
    push @id_to_name, $name;
    push @needs, [];
    push @produces, [];
    return $id;
}

while (<>) {
    chomp;
    my ($ings, $prod) = split ' -> ', $_;
    $prod =~ s/'/\\'/g;
    my $prod_id = get_id $prod;
    for $ing (split ', ', $ings) {
        my ($ing_qty, $ing_name) = split ' ', $ing, 2;
        $ing_name =~ s/'/\\'/g;
        my $ing_id = get_id $ing_name;
        push $produces[$ing_id], $prod_id;
        push $needs[$prod_id], [$ing_id, $ing_qty];
    }
}

print "name_to_id = {\n";
while (my ($name, $id) = each %name_to_id) {
    print "    '$name': $id,\n";
}
print "}\n";

print "id_to_name = [\n";
foreach my $name (@id_to_name) {
    print "    '$name',\n";
}
print "]\n";

print "produces = [\n";
foreach my $products (@produces) {
    print "    [";
    if (@$products) {
        print ' ';
        print join ', ', @$products;
        print ' ';
    }
    print "],\n";
}
print "]\n";

print "needs = [\n";
foreach my $ings (@needs) {
    print "    [";
    if (@$ings) {
        print join(', ', map { "[ $_->[0], $_->[1] ]" } @$ings);
    }
    print "],\n";
}
print "]\n";
